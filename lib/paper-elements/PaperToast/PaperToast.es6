class PaperToast extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    let active = this.data && this.data().active;
    this.active = new ReactiveVar(active);
    this.deactivate = this.deactivate.bind(this);
  }

  deactivate(){
    this.active.set(false);
  }

  activate(){
    this.active.set(true);
  }
  /**
   * after render
   */
  onRendered () {
    if (this.active.get()) {
      window.setTimeout(this.deactivate, this.data().delay || 3000)
    }
  }
}

PaperToast.register('PaperToast');