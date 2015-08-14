Material = Material || {}


Material.IronSelector = IronSelector = class IronSelector extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.selected = new ReactiveVar(this.data().selected || 0);
    //console.log(this.data().onUpdate)
    //this.updateParent = this.data().update;
 }



  handleClick (e) {
    var $element = $(e.target).closest('iron-selector>*');
    let inScope = $(e.target).closest('iron-selector')[0] == $(this.firstNode())[0];
    if (!inScope) {
      return false;
    }
    var selected = $element.index();
    this.selected.set(selected);
    this.updateSelection();
    if (typeof this.data().onUpdate === 'function') {
      this.data().onUpdate(this);
    }

  }

  updateSelection () {
    var $elements = this.findAll('>*>*');
    $elements.forEach((item, index)=>{
      let isSelected = index === parseInt(this.selected.get(),10);
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