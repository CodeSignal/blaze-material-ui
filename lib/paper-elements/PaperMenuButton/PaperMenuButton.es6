class PaperMenuButton extends BlazeComponent {

  constructor() {
    super();
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  /**
   * set defaults
   */
  onCreated() {}

  /**
   * after render
   */
  onRendered() {
    this.input = this.find('input');
    this.selector = this.find('iron-selector');
    this.material = this.find('paper-material');
    $(document).click(this.onOutsideClick);
  }

  onOutsideClick(e) {
    if(!$(e.target).closest(this.firstNode()).length) {
      this.firstNode().classList.remove('open')
    }
  }

  events() {
    return [{
      'click [event-hook=menu-open]': (e) => {
        this.firstNode().classList.toggle('open')
      },
      'mouseleave paper-menu': (e) => {
        if(this.data().closeOnMouseLeave) {
          this.firstNode().classList.remove('open')
        }
      }
    }];
  }
}

PaperMenuButton.register('PaperMenuButton');