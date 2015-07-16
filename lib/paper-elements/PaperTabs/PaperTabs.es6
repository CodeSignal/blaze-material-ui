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
    this.updatePosition();

  }

  handleClick() {
    this.selected = this.selector.selected.get();
    this.updatePosition();

  }

  updatePosition(){
    let tabs = this.tabs.length;
    let selectedTab = this.find('paper-tab:nth-child('+ (parseInt(this.selected,10)  + 1) +')');
    let scale = selectedTab.offsetWidth/(this.selectorElement.offsetWidth);
    console.log(selectedTab.offsetWidth, this.selectorElement.offsetWidth*scale);
    this.style.set('transform:translate3d('+ selectedTab.offsetLeft +'px,0,0) scaleX('+ scale + ')');
  }

  events() {
    return [{
      'click': this.handleClick
    }];
  }
}

PaperTabs.register('PaperTabs');
