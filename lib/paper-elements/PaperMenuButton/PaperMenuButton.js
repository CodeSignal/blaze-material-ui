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

  onDestroyed() {
    document.body.removeEventListener('click', this.closeMenu);
  }

  /**
   * after render
   */
  onRendered() {
    this.input = this.find('input');
    this.selector = this.find('iron-selector');
    this.material = this.find('paper-material');
  }

  closeMenu(e) {
    if (this.open) {
      let outsideMenu = $(e.target).closest('paper-menu-button')[0] !== $(this.firstNode())[0];
      if (outsideMenu) {
        this.firstNode().classList.remove('open');
        this.open = false;
      }
    }
  }

  openMenu() {
    this.open = true;
    this.firstNode().classList.add('open');
  }

  toggleMenu() {
    this.firstNode().classList.toggle('open');
  }


  events() {
    return [{
      'click [event-hook=menu-open]': this.openMenu
    }];
  }
}

PaperMenuButton.register('PaperMenuButton');