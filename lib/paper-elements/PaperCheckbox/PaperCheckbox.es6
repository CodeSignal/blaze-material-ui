class PaperCheckbox extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    let checked = this.data().checked ? 'checked' : false;
    let hidden;
    if (!checked) {
      hidden = 'hidden';
    }
    this.checked = new ReactiveVar(checked);
    this.hidden = new ReactiveVar(hidden);
  }

  /**
   * Handle the click of the checkbox
   */
  handleClick() {
    let checked = this.checked.get();
    this.pressed.set(false);
    if (checked === 'checked') {
      this.checked.set(false);
      this.hidden.set('hidden');
    } else {
      this.checked.set('checked');
      this.hidden.set(false);
    }
    if (this.data()&&this.data().onChange) {
      this.data().onChange(checked !== 'checked', this.data()&&this.data().value);
    }
  }

  /**
   * after render
   */
  onRendered() {

    // find the ripples container
    this.ripple = this.componentChildrenWith('rippleElements')[0];
  }

  /**
   * handle the focus event
   * 1. not focused while pressed
   * @param  {Event}
   */
  onFocus(event) {
    if (this.disabled) {
      return
    };
    if (!this.pressed.get()) {
      this.focused.set(true);
      this.ripple.onDown(event);
    } else {
      this.focused.set(false);
    }
  };

  /**
   * handle the blur event
   * 1. not focused
   * @param  {Event}
   */
  onBlur(event) {
    this.focused.set(false);
    this.ripple.onUp(event);
  }

  /**
   * handle the mousedown event
   * 1. send event to ripple
   * @param  {Event}
   */
  onDown(event) {
    this.ripple.onUp();
    this.pressed.set(true);
    this.ripple.onDown(event);
  }

  /**
   * handle the mouseup event
   * 1. send event to ripple
   */
  onUp() {
    this.pressed.set(false);
    this.ripple.onUp();
  }

  /**
   * @return {Object}  The events
   */
  events() {
    return [{
      'mousedown [data-id=checkboxContainer]': this.onDown,
      'mouseleave [data-id=checkboxContainer]': this.onUp,
      'mouseup [data-id=checkboxContainer]': this.onUp,
      'blur input': this.onBlur,
      'focus input': this.onFocus,
      'click': this.handleClick
    }];
  }
}

PaperCheckbox.register('PaperCheckbox');