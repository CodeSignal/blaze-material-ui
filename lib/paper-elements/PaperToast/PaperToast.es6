class PaperToast extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.dismissable =  this.data && this.data().dismissable
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
    if (this.active.get() && !this.dismissable) {
      window.setTimeout(this.deactivate, this.data().delay || 3000)
    }
  }

  events(){
    return [{
      'click [event-hook=close-toast]': this.deactivate
    }]
  }
}

PaperToast.register('PaperToast');