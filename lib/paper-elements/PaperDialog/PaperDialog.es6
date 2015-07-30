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
  }

  closeDialog() {
    this.node.style.display = 'none';

  }

  confirmDialog() {
    console.log("Confirm this dialog");
  }

  events() {
    return [{
      'click [event-hook=close-dialog]' : this.closeDialog,
      'click [event-hook=confirm-dialog]' : this.confirmDialog,
    }];
  }
}

PaperDialog.register('PaperDialog');