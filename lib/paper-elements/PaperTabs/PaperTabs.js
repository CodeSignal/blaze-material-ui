Material = Material || {}

Material.PaperTabs = PaperTabs = class PaperTabs extends BlazeComponent {

  constructor(){
    this.autorun = this.autorun.bind(this);
  }
  /**
   * set defaults
   */
  onCreated() {
    this.style = new ReactiveVar('');
    this.scrollableLeft = new ReactiveVar(false);
    this.scrollableRight = new ReactiveVar(false);
    this.scrollable = this.data().scrollable === '';
  }

  /**
   * after render
   */
  onRendered() {
    this.selector = this.childrenComponentsWith('selected')[0];
    this.selectorElement = this.selector.firstNode();
    this.selectorElement.setAttribute('flex', '');
    this.selectorElement.setAttribute('horizontal', '');
    this.selectorElement.setAttribute('layout', '');
    this.tabs = $(this.selectorElement).find('paper-tab');
    let tabs = this.tabs.length;
    this.updatePosition();
    this.updateScrollable();

    this.autorun(() => {
      // automatically update wthe position
      // if triggered programatically
      this.selector.selected.dep.depend();
      this.updatePosition();
    });

  }

  getSelected() {
    return this.selector.selected.get();
  }

  handleClick() {
    this.updatePosition();
    this.updateScrollable();
  }

  updateScrollable(){
    let length = this.findAll('paper-tab').length;
    let current = this.getSelected();
    // console.log(length, current)

    if (this.scrollable && current < length - 1) {
      this.scrollableLeft.set(true);
    } else {
      this.scrollableLeft.set(false);
    }
    if (this.scrollable && current > 0) {
      this.scrollableRight.set(true);
    } else {
      this.scrollableRight.set(false);
    }
    // console.log(this.scrollable, current < length)
  }


  updatePosition(){
    let tabs = this.tabs.length;
    let selectedTab = this.find('paper-tab:nth-child('+ (parseInt(this.getSelected(),10)  + 1) +')');
    let scale = selectedTab.offsetWidth/(this.selectorElement.offsetWidth);
    this.style.set('transform:translate3d('+ selectedTab.offsetLeft +'px,0,0) scaleX('+ scale + ')');
  }

  events() {
    return [{
      'click': this.handleClick
    }];
  }
}

PaperTabs.register('PaperTabs');
