class PaperToggleButton extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    this.checked = new ReactiveVar(this.data() && this.data().checked ? 'checked' : false);


  }

  /**
   * Handle the click of the toggle button
   */
  handleClick(){
    let checked = this.checked.get()
    this.checked.set(!checked ? 'checked' : false);
  }

  /**
   * after render
   */
  onRendered () {

    // find the ripples container
    this.ripple = this.childrenComponentsWith('rippleElements')[0];
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
    this.ripple.onDown(event);
  }

  /**
   * handle the blur event
   * 1. not focused
   * 2. not elevated
   */
  onBlur () {
    this.focused.set(false);
    this.ripple.onUp(event);
  }

  /**
   * handle the mousedown event
   * 1. send event to ripple
   * @param  {Event}
   */
  onDown(event) {
    this.ripple.onDown(event);
  }

  /**
   * handle the mouseup event
   * 1. send event to ripple
   * @param  {Event}
   */
  onUp(event) {
    this.ripple.onUp(event);
  }

  /**
   * @return {Object}  The events
   */
  events() {
    return [{
      'mousedown [data-id=toggleButton]': this.onDown,
      'mouseleave [data-id=toggleButton]': this.onUp,
      'mouseup [data-id=toggleButton]': this.onUp,
      'blur [data-id=toggleButton]': this.onBlur,
      'focus [data-id=toggleButton]': this.onFocus,
      'click': this.handleClick
    }]
  }
}

PaperToggleButton.register('PaperToggleButton');
