Material = Material || {}

Material.PaperDrawerPanel = PaperDrawerPanel = class PaperDrawerPanel extends BlazeComponent {

  constructor() {
    super();
    this.classNames = new ReactiveVar('wide-layout left-drawer paper-drawer-panel transition');
    this.handleResize = this.handleResize.bind(this);
  }
  /**
   * set defaults
   */
  onCreated() {
    this.handleResize();
  }

  /**
   * after render
   */
  onRendered() {
    var main = this.componentChildren('IronSelector');
    this.selector = this.componentChildrenWith('selected')[0];
    this.firstNode().component = this.component();

    // handle resize
    window.addEventListener('resize', this.handleResize);

  }

  onDestroyed(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (window.innerWidth < 900) {
      this.classNames.set('narrow-layout left-drawer paper-drawer-panel transition');
    } else {
      this.classNames.set('wide-layout left-drawer paper-drawer-panel transition');
    }
  }

  selectDrawer() {
    this.selector.selected.set(1);
    this.selector.updateSelection();
  }

  selectMain() {
    this.selector.selected.set(0);
    this.selector.updateSelection();
  }

  events() {
    return [{
      'click .paper-drawer-toggle:first': this.selectDrawer,
      'click [data-id=scrim]': this.selectMain
    }];
  }
}

PaperDrawerPanel.register('PaperDrawerPanel');





