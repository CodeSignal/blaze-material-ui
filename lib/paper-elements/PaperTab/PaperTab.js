Material = Material || {}

Material.PaperTab = PaperTab = class PaperTab extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {}

  /**
   * after render
   */
  onRendered() {

    // find the ripples container
    this.ripple = this.childrenComponentsWith('rippleElements')[0];
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
   * handle the click event
   * 1. click link if present
   * @param  {Event}
   */
  onClick(event) {
    var link = this.find('a');

    if (link) {
      link.click();
    }
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
      'mousedown': this.onDown,
      'mouseleave': this.onUp,
      'mouseup': this.onUp,
      'click': this.onClick
    }];
  }
}

PaperTab.register('PaperTab');
