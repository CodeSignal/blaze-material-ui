class PaperDialog extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {}

  /**
   * after render
   */
  onRendered () {
    this.node = this.firstNode();
    this.openDialog();
  }

  closeDialog() {
    setTimeout(()=>{
      this.node.style.display = 'none';

    }, 400);
  }

  openDialog() {

   let top = 119;
   let left = 12;
   let maxHeight = 252;
   let maxWidth = 1064;

    let style = {
      outline: 'none',
      zIndex: 12,
      top: `${top}`, 
      left: `${left}`, 
      boxSizing: 'border-box',
      maxHeight: `${maxHeight}px`,
      maxWidth: `${maxWidth}px`,
      position: 'fixed'
    }

    for (let prop in style) {
      this.node.style[prop] = style[prop];
    }


    //this.node.style.display = 'block';
  }

  dismissDialog() {
    this.closeDialog();

  }

  confirmDialog() {
    this.closeDialog();
  }

  events() {
    return [{
      'click [event-hook=dialog-dismiss]' : this.dismissDialog,
      'click [event-hook=dialog-confirm]' : this.confirmDialog,
    }];
  }
}

PaperDialog.register('PaperDialog');