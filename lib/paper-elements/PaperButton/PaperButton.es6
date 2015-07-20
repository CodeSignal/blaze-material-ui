class PaperButton extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.elevation = new ReactiveVar(1);
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    this.active = new ReactiveVar(false);
  }

  /**
   * after render
   */
  onRendered () {
    // find the ripples container
    this.ripple = this.componentChildrenWith('rippleElements')[0];
  }

  /**
   * handle the focus event
   * 1. not focused while pressed
   * 2. elevated
   */
  onFocus () {
    if (!this.pressed.get()) {
      this.focused.set('');
    }
    this.elevation.set(3);
  };
  /**
   * handle the blur event
   * 1. not focused
   * 2. not elevated
   */
  onBlur () {
    this.focused.set(false);
    this.elevation.set(1);
  }

  /**
   * handle the mousedown event
   * 1. pressed
   * 2. active
   * 3. not focused
   * 4. elevated
   * 5. send event to ripple
   * @param  {Event}
   */
  onDown (event) {
    this.pressed.set('');
    this.active.set('');
    this.focused.set(false);
    this.elevation.set(2);
    this.ripple.onDown(event);
  }

  /**
   * handle the mouseup event
   * 1. only if pressed
   * 2. not pressed
   * 3. not active
   * 4. elevated if focused
   * 5. send event to ripple
   * @param  {Event}
   */
  onUp (event) {
    if(this.pressed.get()!==false) {
      this.pressed.set(false);
      this.active.set(false);
      this.ripple.onUp(event);
      if (this.focused.get()) {
        this.elevation.set(3);
      }
      else {
        this.elevation.set(1);
      }
    }
  }

  /**
   * @return {Object}  The events
   */
  events () {
    return [{
      'blur': this.onBlur,
      'focus': this.onFocus,
      'mousedown': this.onDown,
      'mouseleave': this.onUp,
      'mouseup': this.onUp
    }];
  }
}


PaperButton.register('PaperButton')
