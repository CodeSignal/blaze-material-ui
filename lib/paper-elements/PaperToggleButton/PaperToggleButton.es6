class PaperToggleButton extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    let checked = this.data().checked;
    this.checked = new ReactiveVar(checked);
}

  /**
   * Handle the click of the toggle button
   */
  handleClick(){
    let checked = this.checked.get()
    if (checked) {
        this.checked.set(false);
    } else {
        this.checked.set('checked');
    }
  }


  /**
   * after render
   */
  onRendered () {

    // find the ripples container
    this.ripple = this.componentChildrenWith('rippleElements')[0];
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
      'click': this.handleClick
    }]
  }
}

PaperToggleButton.register('PaperToggleButton');