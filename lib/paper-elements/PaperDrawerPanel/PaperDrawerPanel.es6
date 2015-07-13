class PaperDrawerPanel extends BlazeComponent {

  constructor() {
    super();
    this.sizeClass = new ReactiveVar('wide-layout left-drawer paper-drawer-panel');
    this.handleResize = this.handleResize.bind(this);
    this.onClick = this.onClick.bind(this);
    console.log('constructor', this);
  }
  /**
   * set defaults
   */
  onCreated () {
    this.handleResize();
    console.log('onCreated', this);
 }

  /**
   * after render
   */
  onRendered () {
    console.log('onRendered', this);
    var main = this.componentChildren('IronSelector');
    console.log(main[0].componentChildren('PaperDrawerPanelMain'));
    // var mainTemplate = this.find('template [main]');
    // var drawerTemplate = this.find('template [drawer]');

    this.selector = this.componentChildrenWith('selected')[0];
    // var mainContent = this.selector.find('[data-id=main]');
    // var drawerContent = this.selector.find('[data-id=drawer]');
    // var drawerContent = this.selector.find('[data-id=drawer]');

    // mainContent.appendChild(mainTemplate);
    // drawerContent.appendChild(drawerTemplate);

    window.addEventListener('resize', this.handleResize);

    //console.log(this.selector);

  }

  handleResize() {
    if (window.innerWidth < 900) {
      this.sizeClass.set('narrow-layout left-drawer paper-drawer-panel');
    } else {
      this.sizeClass.set('wide-layout left-drawer paper-drawer-panel');
    }
  }

  selectDrawer() {
    this.selector.selected.set(1)
    this.selector.updateSelection()
  }

  onClick() {
    console.log('clicked');
  }

  handlerHelper (callback) {
    return () => {
      return callback;
    }
  }

  handler () {
    handlerHelper((e) => {
     console.log('click!', e);
   });
  }


  getClasses(){
    return this.sizeClass.get();
  }

  selectMain() {
    this.selector.selected.set(0)
    this.selector.updateSelection()
  }

  events () {
    return [{
      'click .paper-drawer-toggle': this.selectDrawer,
      'click [data-id=scrim]': this.selectMain
    }];
  }
}

PaperDrawerPanel.register('PaperDrawerPanel');




class PaperDrawerPanelMain extends BlazeComponent {

  constructor() {
    super();
    console.log('constructor', this);
  }
  /**
   * set defaults
   */
  onCreated () {
    console.log('onCreated', this);
 }
}

PaperDrawerPanelMain.register('PaperDrawerPanelMain');

class PaperDrawerPanelDrawer extends BlazeComponent {

  constructor() {
    super();
    console.log('constructor', this);
  }
  /**
   * set defaults
   */
  onCreated () {
    console.log('onCreated', this);
 }
}

PaperDrawerPanelDrawer.register('PaperDrawerPanelDrawer');