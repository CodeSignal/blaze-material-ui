class PaperToolbar extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.size = new ReactiveVar('');
    this.bottomNodes = new ReactiveVar([]);
  }

  /**
   * after render
   */
  onRendered () {
    this.sortItems();

  }

  /**
   * Sort the items into the three sections of the toolbar
   */
  sortItems () {
    // find the elements in the hiddenBar
    var elements = this.find('hidden').childNodes;
    var topBar = this.find('[data-id=topBar]');
    var middleBar = this.find('[data-id=middleBar]');
    var bottomBar = this.find('[data-id=bottomBar]');

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (element.classList && element.classList.contains('middle')) {
        middleBar.appendChild(element);
      } else if (element.classList && element.classList.contains('bottom')) {
        bottomBar.appendChild(element);
      } else if (parseInt(element.nodeType,10) === 1) {
        topBar.appendChild(element);
      }
    }
  }
}

PaperToolbar.register('PaperToolbar');