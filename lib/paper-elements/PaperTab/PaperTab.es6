class PaperTab extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {}

  /**
   * after render
   */
  onRendered() {

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
    //this.ripple.onUp(event);
  }
  /**
   * @return {Object}  The events
   */
  events() {
    return [{
      'mousedown': this.onDown,
      'mouseleave': this.onUp,
      'mouseup': this.onUp
    }];
  }
}

PaperTab.register('PaperTab');