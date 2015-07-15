class PaperCheckbox extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
  	this.checked = new ReactiveVar('checked');
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
  onRendered () {}

  events() {
  	return [{
  		'click': this.handleClick
  	}]
  }
}

PaperCheckbox.register('PaperCheckbox');