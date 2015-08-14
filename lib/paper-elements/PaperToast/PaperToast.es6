class PaperToast extends BlazeComponent {

  constructor() {
    super();
    this.deactivate = this.deactivate.bind(this);
    this.closeOnClick = this.closeOnClick.bind(this);
  }
  /**
   * set defaults
   */
  onCreated() {
    this.dismissable = this.data && this.data().dismissable;
    let active = this.data && this.data().active;
    this.active = new ReactiveVar(active);

  }

  deactivate() {
    this.active.set(false);
    this.handleClose();
  }

  closeOnClick() {
    clearTimeout(this.timer);
    this.deactivate();
  }

  activate() {
    this.active.set(true);
  }

  handleClose() {
    if (this.data && typeof this.data().onClose === 'function') {
      this.data().onClose();
    }
  }
  /**
   * after render
   */
  onRendered() {
    if (this.active.get()) {
      this.timer = setTimeout(this.deactivate, this.data().delay || 3000);
    }
  }

  events() {
    return [{
      'click [event-hook=close-toast]': this.closeOnClick
    }];
  }
}

PaperToast.register('PaperToast');