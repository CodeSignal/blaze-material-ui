class PaperMenu extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {
    this.id = new ReactiveVar(this.data().id);
    this.selected = new ReactiveVar(this.data().defaultSelected);
  }

  /**
   * after render
   */
  onRendered() {
    this.selector = this.componentChildrenWith('selected')[0];
  }

  handleUpdate() {
    return () => {
      let selected = this.selector.selected.get();
      this.selected.set(selected);
      if (typeof this.data().onUpdate === 'function') {
        this.data().onUpdate();
      }
    };
  }
}

PaperMenu.register('PaperMenu');