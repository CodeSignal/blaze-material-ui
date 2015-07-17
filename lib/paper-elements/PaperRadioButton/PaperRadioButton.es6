class PaperRadioButton extends BlazeComponent {

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
  onRendered () {}

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