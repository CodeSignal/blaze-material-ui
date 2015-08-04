class PaperMenu extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.id = new ReactiveVar(this.data().id)
  }

  /**
   * after render
   */
  onRendered () {}
}

PaperMenu.register('PaperMenu');