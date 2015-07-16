class IronSelector extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.selected = new ReactiveVar(this.data().selected || 0);
  }

  getSelected () {
    return this.selected.get();
  }

  handleClick (e) {
    var $element = $(e.toElement);
    //console.log($element)
    if ($element.parent()[0] !== this._componentInternals.templateInstance.firstNode) {
      return false;
    }
    var selected = $element.index();
    this.selected.set(selected);
    this.updateSelection();
  }

  updateSelection () {
    var $elements = this.findAll('>*>*');
    $elements.forEach((item, index)=>{
      let isSelected = index === this.getSelected();
      item.classList.toggle('iron-selected', isSelected);
    });
  }

  /**
   * after render
   */
  onRendered () {
    this.selector = this.componentChildrenWith('selected');
    this.updateSelection();

  }

  events () {
    return [{
      'click': this.handleClick
    }];
  }
}

IronSelector.register('IronSelector');