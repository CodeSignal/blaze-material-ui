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
    $('html').click(this.onOutsideClick);
  }

  onOutsideClick(e) {
    this.firstNode().classList.remove('open')
  }

  events() {
    return [{
      'click [event-hook=menu-open]': (e) => {
        e.stopPropagation(); // Don't trigger onOutsideClick when clicking on menu open button
        this.firstNode().classList.toggle('open')
      },
      'click paper-menu': (e) => {
        e.stopPropagation(); // Don't trigger onOutsideClick when clicking on menu itself
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