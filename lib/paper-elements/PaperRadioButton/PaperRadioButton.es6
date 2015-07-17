class PaperRadioButton extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    let checked = this.data().checked;
    this.checked = new ReactiveVar(checked);
  }

  /**
   * Handle the click of the checkbox
   */
  handleClick(){
    let checked = this.checked.get()
    console.log(checked)
    if (checked === 'checked') {
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
      'mousedown [data-id=radioContainer]': this.onDown,
      'mouseleave [data-id=radioContainer]': this.onUp,
      'mouseup [data-id=radioContainer]': this.onUp,
      'click': this.handleClick
    }]
  }
}

PaperRadioButton.register('PaperRadioButton');