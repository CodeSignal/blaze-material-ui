class PaperTabs extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
  }

  /**
   * after render
   */
  onRendered () {
    this.selector = this.componentChildrenWith('selected');
    this.selectorElement = this.selector[0].firstNode();
    this.selectorElement.setAttribute('flex','');
    this.selectorElement.setAttribute('horizontal','');
    this.selectorElement.setAttribute('layout','');
  }
}

PaperTabs.register('PaperTabs');