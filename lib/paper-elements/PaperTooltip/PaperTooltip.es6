class PaperTooltip extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {
    this.hidden = new ReactiveVar('true');
  }

  /**
   * after render
   */
  onRendered() {
    this.triggerNode = this.firstNode().parentNode;
    this.triggerNode.addEventListener('mouseenter', () => {
      this.hidden.set(false);
      this.entered = true;
    });
    this.triggerNode.addEventListener('mouseleave', () => {
      this.entered = false;
      window.setTimeout(() => {
        if (!this.entered) {
          this.hidden.set(true);

        }
      }, 400);
    });

  }
}

PaperTooltip.register('PaperTooltip');