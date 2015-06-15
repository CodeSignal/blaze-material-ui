class PaperRipple extends BlazeComponent {
  onCreated () {
    this.ripples = new ReactiveVar([]);
    this.rippleCollection = [];
    this.rippleData = [];
    this.rippleCounter = 0;
  }

  onDown (event) {
    var rect = this.find('paper-ripple').getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var fillX = Math.abs(width/2 - event.offsetX);
    var fillY = Math.abs(height/2 - event.offsetY);

    var containerSize = Math.max(width, height);
    var fillSize =  Math.max(width + (width - fillX), height + (height - fillY))


    this.rippleCollection.push(++this.rippleCounter);

    let style = {
      left: (event.offsetX - fillSize/2) + 'px',
      top: (event.offsetY - fillSize/2) + 'px',
      height: fillSize + 'px',
      width: fillSize + 'px',
      background: 'rgba(0,0,0,0.2)'
    };

    this.rippleData.push({
      style: style,
      id: this.rippleCounter
    });
    this.ripples.set(this.rippleData);
  }

  onUp (event) {
    let run = () => {
      this.rippleCollection.splice(0, 1);
      this.rippleData.splice(0, 1);
      this.ripples.set(this.rippleData);
    }
    setTimeout(run, 500);
  }



  getRipples () {
    return this.ripples.get()
  }

  events() {
    return [{
      'mousedown': this.onDown,
      'mouseup': this.onUp
    }];
  }
}

PaperRipple.register('PaperRipple');