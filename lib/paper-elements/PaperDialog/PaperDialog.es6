class PaperDialog extends BlazeComponent {

  constructor() {
    super();
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.closeCallbacks = [];
  }

  /**
   * set defaults
   */
  onCreated () {}

  /**
   * after render
   */
  onRendered () {
    this.node = this.firstNode();

    // Allow parent to manually open & close the dialog
    this.node.openDialog = this.openDialog;
    this.node.closeDialog = this.closeDialog;

    // Allow parent to set dialog close hooks
    this.node.onClose = (closeCallback) => {
      this.closeCallbacks.push(closeCallback);
    };
  }

  closeDialog() {
    setTimeout(()=>{
      this.node.style.display = 'none';
      for(let i in this.closeCallbacks) {
        this.closeCallbacks[i]();
      }
    }, 100);
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
      //maxHeight: `${maxHeight}px`,
      maxWidth: `${maxWidth}px`,
      position: 'fixed'
    }

    for (let prop in style) {
      this.node.style[prop] = style[prop];
    }

    setTimeout(() => {
      this.node.style.display = 'block';
    }, 100);
  }

  dismissDialog() {
    this.closeDialog();

  }

  events() {
    return [{
      'click [event-hook=dialog-dismiss]' : this.dismissDialog
    }];
  }
}

PaperDialog.register('PaperDialog');