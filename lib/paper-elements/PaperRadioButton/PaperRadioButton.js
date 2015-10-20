class PaperRadioButton extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    //let checked = this.data().checked;
    //this.checked = new ReactiveVar(this.data().checked);
  }

  /**
   * Handle the click of the checkbox
   */
  handleClick(){
    // let checked = this.checked.get()
    // if (checked === 'checked') {
    //     this.checked.set(false);
    // } else {
    //     this.checked.set('checked');
    // }
    //this.checked.set('checked');
    this.find('input').checked = 'checked';
}


  /**
   * after render
   */
  onRendered() {

    // find the ripples container
    this.ripple = this.childrenComponentsWith('rippleElements')[0];
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

  onChange(e){
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
      'mousedown [data-id=radioContainer]': this.onDown,
      'mouseleave [data-id=radioContainer]': this.onUp,
      'mouseup [data-id=radioContainer]': this.onUp,
      'input input': this.onChange,
      'change input': this.onChange,
      'blur input': this.onBlur,
      'focus input': this.onFocus,
      'click': this.handleClick
    }];
  }

}

PaperRadioButton.register('PaperRadioButton');