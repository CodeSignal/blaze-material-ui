class PaperRipple extends BlazeComponent {
  onCreated () {
    this.ripples = new ReactiveVar([]);
    this.rippleCollection = [];
    this.rippleData = [];
    this.rippleElements = [];
    this.rippleCounter = 0;
  }

  onDown (event) {
    var rect = this.find('paper-ripple').getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var fillX = Math.abs(width/2 - event.offsetX);
    var fillY = Math.abs(height/2 - event.offsetY);

    var containerSize = Math.max(width, height);
    var fillSize =  Math.max(width + fillX*2, height + fillY*2);
    fillSize *= 1.1;

    this.rippleCollection.push(++this.rippleCounter);

    var style = {
      left: (event.offsetX - fillSize/2) + 'px',
      top: (event.offsetY - fillSize/2) + 'px',
      height: fillSize + 'px',
      width: fillSize + 'px'
    };

    var waveContainer = document.createElement('div');
    waveContainer.className = 'wave-container';


    for (let prop in style) {
      waveContainer.style[prop] = style[prop]
    }
    this.rippleElements.push(waveContainer);

    this.rippleData.push({
      style: style,
      id: this.rippleCounter
    });
    this.find('[data-id=waves]').appendChild(waveContainer);
    this.ripples.set(this.rippleElements);
  }

  onUp (event) {
    var waveContainer = this.rippleElements[this.rippleCounter - 1];
    waveContainer.classList.add('remove');
    waveContainer.addEventListener('transitionend', () => {
       waveContainer.remove();
     });
  }



  getRipples () {
    return this.ripples.get()
  }
}

PaperRipple.register('PaperRipple');