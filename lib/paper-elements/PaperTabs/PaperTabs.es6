class PaperTabs extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {
    this.style = new ReactiveVar('');
  }

  /**
   * after render
   */
  onRendered() {
    this.selector = this.componentChildrenWith('selected')[0];
    this.selected = this.selector.selected.get();
    this.selectorElement = this.selector.firstNode();
    this.selectorElement.setAttribute('flex', '');
    this.selectorElement.setAttribute('horizontal', '');
    this.selectorElement.setAttribute('layout', '');
    this.tabs = $(this.selectorElement).find('paper-tab');
    let tabs = this.tabs.length;
    this.style.set('transform:translate3d('+ 100/tabs * this.selected +'%,0,0) scaleX('+ 1/tabs + ')');

  }

  handleClick() {
    this.selected = this.selector.selected.get();
    let tabs = this.tabs.length;
    this.style.set('transform:translate3d('+ 100/tabs * this.selected +'%,0,0) scaleX('+ 1/tabs + ')');
  }

  events() {
    return [{
      'click': this.handleClick
    }];
  }
}

PaperTabs.register('PaperTabs');
