class PaperMenuButton extends BlazeComponent {

  constructor() {
    super();
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  /**
   * set defaults
   */
  onCreated() {
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  /**
   * after render
   */
  onRendered() {
    this.input = this.find('input');
    this.selector = this.find('iron-selector');
    this.material = this.find('paper-material');
    this.button = this.firstNode();
    document.body.addEventListener('click', this.onOutsideClick);
  }

  onDestroyed() {
    document.body.removeEventListener('click', this.onOutsideClick);
  }

  closeMenu() {
    this.firstNode().classList.remove('open');
  }

  openMenu() {
    this.firstNode().classList.add('open');
  }

  toggleMenu() {
    this.firstNode().classList.toggle('open');
  }

  onOutsideClick(e) {
    if(!$(e.target).closest(this.firstNode()).length) {
      this.closeMenu();
    }
  }

  events() {
    return [{
      'click [event-hook=menu-open]': this.openMenu,
      'mouseleave paper-menu': (e) => {
        if(this.data().closeOnMouseLeave) {
          this.firstNode().classList.remove('open')
        }
      }
    }];
  }
}

PaperMenuButton.register('PaperMenuButton');