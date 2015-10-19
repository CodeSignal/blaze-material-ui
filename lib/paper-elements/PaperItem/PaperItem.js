class PaperItem extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {}

  /**
   * after render
   */
  onRendered () {
    this.link = this.find('a');
  }

  events(){
    return [{
      'click': ()=> {
        if (this.link) {
          //this.link.click()
        }
      }
    }]
  }
}

PaperItem.register('PaperItem');