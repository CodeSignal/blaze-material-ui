Material = Material || {}


Material.IronSelector = IronSelector = class IronSelector extends BlazeComponent {

  constructor() {
    super();
    this.updateSelectedIndex = this.updateSelectedIndex.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  /**
   * set defaults
   */
  onCreated () {
    this.selected = new ReactiveVar(0);
    //console.log(this.data().onUpdate)
    //this.updateParent = this.data().update;
    this.autorun(this.updateSelectedIndex);
 }

  updateSelectedIndex () {
    this.selected.set(this.data().selected || 0);
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
    let selected = parseInt(this.selected.get(),10);
    var $elements = this.findAll('>*>*');
    $elements.forEach((item, index)=>{
      let isSelected = index === selected;
      item.classList.toggle('iron-selected', isSelected);
    });
  }

  /**
   * after render
   */
  onRendered () {
    this.selector = this.childrenComponentsWith('selected');
    this.autorun(this.updateSelection);

  }

  events () {
    return [{
      'click': this.handleClick
    }];
  }
}

IronSelector.register('IronSelector');