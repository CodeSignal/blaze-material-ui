class PaperRipple extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {
    this.rippleElements = [];
    this.rippleCounter = 0;
  }

  /**
   * handle the down event
   * will create a ripple and append it to the `[data-id=waves]` element
   * @param {Event} the vent that triggered the function
   */
  onDown(event) {
    var rect = this.find('paper-ripple').getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var fillX = Math.abs(width / 2 - event.offsetX);
    var fillY = Math.abs(height / 2 - event.offsetY);
    // get the maximum of both dimensions
    var containerSize = Math.max(width, height);
    // get tha needed fill value
    var fillSize = Math.max(width + fillX * 2, height + fillY * 2);
    // scale to fill edges
    // TODO use trigonometric check?
    fillSize *= 1.1;
    ++this.rippleCounter;

    // create an object with styles for the ripple
    // only dimensions and positions will be defined here
    var style = {
      left: (event.offsetX - fillSize / 2) + 'px',
      top: (event.offsetY - fillSize / 2) + 'px',
      height: fillSize + 'px',
      width: fillSize + 'px'
    };

    if (this.data().centered !== undefined) {
      style = {
        left: '0%',
        top: '0%',
        height: height + 'px',
        width: width + 'px'
      };
    }
    // create an element
    var waveContainer = document.createElement('div');
    waveContainer.className = 'wave-container';
    // set styles to element
    for (let prop in style) {
      waveContainer.style[prop] = style[prop];
    }
    // push to collection
    // this will let us get the element later
    // TODO use JSON structure and clear after removing
    this.rippleElements.push(waveContainer);
    this.find('[data-id=waves]').appendChild(waveContainer);
  }

  /**
   * handle the up or leave event
   * this will remove the ripple
   * @param {Event} the vent that triggered the function
   */
  onUp (event) {
    var waveContainer = this.rippleElements[this.rippleCounter - 1];
    if (waveContainer) {
      waveContainer.classList.add('remove');
      waveContainer.addEventListener('transitionend', () => {
         waveContainer.remove();
       });      
    }
  }
}

PaperRipple.register('PaperRipple');