class PaperMenuButton extends BlazeComponent {

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

    console.log(this.componentChildrenWith('id')[0].componentChildrenWith('selected')[0].selected.get())
  }

  events() {
    return [{
      'click [event-hook=menu-open]': (e) => {
        this.firstNode().classList.toggle('open')
      },
      'mouseleave paper-menu': (e) => {
        this.firstNode().classList.remove('open')
      }
    }];
  }
}

PaperMenuButton.register('PaperMenuButton');