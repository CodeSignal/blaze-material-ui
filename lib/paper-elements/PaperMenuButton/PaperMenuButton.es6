class PaperMenuButton extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    document.body.addEventListener('click', this.closeMenu);
  }

  /**
   * after render
   */
  onRendered() {
    this.input = this.find('input');
    this.selector = this.find('iron-selector');
    this.material = this.find('paper-material');
    this.button = this.firstNode();
  }

  closeMenu() {
    this.firstNode().classList.remove('open');
  }

  openMenu() {
    console.log(this.firstNode())
    this.firstNode().classList.add('open');
  }

  toggleMenu() {
    this.firstNode().classList.toggle('open');
  }

  stop(e) {
    e.stopPropagation();
  }

  events() {
    return [{
      'click [event-hook=menu-open]': this.openMenu,
      'click *': this.stop
    }];
  }
}

PaperMenuButton.register('PaperMenuButton');