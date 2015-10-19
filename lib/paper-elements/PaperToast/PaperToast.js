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
    this.props = this.data() || {};
    this.active = new ReactiveVar(this.props.active);
  }

  removeToast(e) {
    if (e.animationName === 'hide-toast') {
      e.target.removeEventListener('animationend', this.removeToast);
      e.target.remove();
    }
  }

  deactivate() {
    this.active.set(false);
    this.handleClose();
    this.firstNode().addEventListener('animationend', this.removeToast);
  }

  closeOnClick() {
    clearTimeout(this.timer);
    this.deactivate();
  }

  activate() {
    this.active.set(true);
  }

  handleClose() {
    if (typeof this.props.onClose === 'function') {
      this.data().onClose();
    }
  }
  /**
   * after render
   */
  onRendered() {
    if (this.active.get()) {
      this.timer = setTimeout(this.deactivate, this.props.delay || 3000);
    }
  }

  onDestroyed() {
    clearTimeout(this.timer);
  }

  events() {
    return [{
      'click [event-hook=close-toast]': this.closeOnClick
    }];
  }
}

PaperToast.register('PaperToast');