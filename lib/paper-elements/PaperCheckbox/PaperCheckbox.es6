class PaperCheckbox extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    let checked = this.data().checked;
    let hidden;
    if (!this.data().checked) {
        hidden = 'hidden'
    }
    this.checked = new ReactiveVar(checked);
    this.hidden = new ReactiveVar(hidden);
  }

  /**
   * Handle the click of the checkbox
   */
  handleClick(){
    let checked = this.checked.get()
    console.log(checked)
    if (checked === 'checked') {
        this.checked.set(false);
        this.hidden.set('hidden');
    } else {
        this.checked.set('checked');
        this.hidden.set(false);
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
      'mousedown [data-id=checkboxContainer]': this.onDown,
      'mouseleave [data-id=checkboxContainer]': this.onUp,
      'mouseup [data-id=checkboxContainer]': this.onUp,
      'click': this.handleClick
    }]
  }
}

PaperCheckbox.register('PaperCheckbox');