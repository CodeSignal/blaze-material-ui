class IronIcon extends BlazeComponent {
  onCreated () {
    /**
     * Map of icons to use
     * TODO: access from external file
     * 
     */

    this.svg = new ReactiveVar({
      menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
      more: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
      refresh: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
    });
  }
  /**
   * @param  {String} name  The name of the icon
   * @return {String}       Retuns the path of the SVG
   */
  getSVG (name) {
    return this.svg.get()[name];
  }

}

IronIcon.register('IronIcon');

class MarkedElement extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {}

  /**
   * after render
   */
  onRendered () {
    console.log(this.data().markdown)
    console.log(marked)
  }
}

MarkedElement.register('MarkedElement');

class PaperButton extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.elevation = new ReactiveVar(1);
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    this.active = new ReactiveVar(false);
  }

  /**
   * after render
   */
  onRendered () {
    // find the ripples container
    this.ripple = this.componentChildrenWith('rippleElements')[0];
  }

  /**
   * Set the elevation of the button
   * @param {Integer} elevation  The index of the item
   */
  setElevation (elevation) {
    this.elevation.set(elevation);
  }

  /**
   * get the elevation of the button
   * @return {Integer}  Returns the elevation
   */
  getElevation () {
    return this.elevation.get();
  }

  /**
   * get the pressed state of the button
   * @return {Boolean}  Returns the pressed state
   */
  getPressed () {
    return this.pressed.get();
  }

  /**
   * get the focused state of the button
   * @return {Boolean}  Returns the focused state
   */
  getFocused () {
    return this.focused.get();
  }

  /**
   * get the active state of the button
   * @return {Boolean}  Returns the active state
   */
  getActive () {
    return this.active.get();
  }

  /**
   * handle the focus event
   * 1. not focused while pressed
   * 2. elevated
   */
  onFocus () {
    if (!this.pressed.get()) {
      this.focused.set('');
    }
    this.setElevation(3);
  };
  /**
   * handle the blur event
   * 1. not focused
   * 2. not elevated
   */
  onBlur () {
    this.focused.set(false);
    this.setElevation(1);
  }

  /**
   * handle the mousedown event
   * 1. pressed
   * 2. active
   * 3. not focused
   * 4. elevated
   * 5. send event to ripple
   * @param  {Event}
   */
  onDown (event) {
    this.pressed.set('');
    this.active.set('');
    this.focused.set(false);
    this.setElevation(2);
    this.ripple.onDown(event);
  }

  /**
   * handle the mouseup event
   * 1. only if pressed
   * 2. not pressed
   * 3. not active
   * 4. elevated if focused
   * 5. send event to ripple
   * @param  {Event}
   */
  onUp (event) {
    if(this.pressed.get()!==false) {
      this.pressed.set(false);
      this.active.set(false);
      this.ripple.onUp(event);
      if (this.focused.get()) {
        this.setElevation(3);
      }
      else {
        this.setElevation(1);
      }
    }
  }

  /**
   * @return {Object}  The events
   */
  events () {
    return [{
      'blur': this.onBlur,
      'focus': this.onFocus,
      'mousedown': this.onDown,
      'mouseleave': this.onUp,
      'mouseup': this.onUp
    }];
  }
}


PaperButton.register('PaperButton')


class PaperFab extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.elevation = new ReactiveVar(1);
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    this.active = new ReactiveVar(false);
  }

  /**
   * after render
   */
  onRendered () {
    // find the ripples container
    this.ripple = this.componentChildrenWith('rippleElements')[0];
  }

  /**
   * Set the elevation of the button
   * @param {Integer} elevation  The index of the item
   */
  setElevation (elevation) {
    this.elevation.set(elevation);
  }

  /**
   * get the elevation of the button
   * @return {Integer}  Returns the elevation
   */
  getElevation () {
    return this.elevation.get();
  }

  /**
   * get the pressed state of the button
   * @return {Boolean}  Returns the pressed state
   */
  getPressed () {
    return this.pressed.get();
  }

  /**
   * get the focused state of the button
   * @return {Boolean}  Returns the focused state
   */
  getFocused () {
    return this.focused.get();
  }

  /**
   * get the active state of the button
   * @return {Boolean}  Returns the active state
   */
  getActive () {
    return this.active.get();
  }

  /**
   * handle the focus event
   * 1. not focused while pressed
   * 2. elevated
   */
  onFocus () {
    if (!this.pressed.get()) {
      this.focused.set('');
    }
    this.setElevation(3);
  };
  /**
   * handle the blur event
   * 1. not focused
   * 2. not elevated
   */
  onBlur () {
    this.focused.set(false);
    this.setElevation(1);
  }

  /**
   * handle the mousedown event
   * 1. pressed
   * 2. active
   * 3. not focused
   * 4. elevated
   * 5. send event to ripple
   * @param  {Event}
   */
  onDown (event) {
    this.pressed.set('');
    this.active.set('');
    this.focused.set(false);
    this.setElevation(2);
    this.ripple.onDown(event);
  }

  /**
   * handle the mouseup event
   * 1. only if pressed
   * 2. not pressed
   * 3. not active
   * 4. elevated if focused
   * 5. send event to ripple
   * @param  {Event}
   */
  onUp (event) {
    if(this.pressed.get()!==false) {
      this.pressed.set(false);
      this.active.set(false);
      this.ripple.onUp(event);
      if (this.focused.get()) {
        this.setElevation(3);
      }
      else {
        this.setElevation(1);
      }
    }
  }

  /**
   * @return {Object}  The events
   */
  events () {
    return [{
      'blur': this.onBlur,
      'focus': this.onFocus,
      'mousedown': this.onDown,
      'mouseleave': this.onUp,
      'mouseup': this.onUp
    }];
  }
}


PaperFab.register('PaperFab')


class PaperMaterial extends BlazeComponent {}
PaperMaterial.register('PaperMaterial');

class PaperProgress extends BlazeComponent {
  
  /**
   * get the progress as a float
   * can be used when e.g. scaling the progressbar `scale({{getProgress}})
   * @return {Float}  Returns a value from 0 to 1
   */
  getProgress() {
    var value = this.data().value;
    var max = this.data().max
    return value/max;
  }
}

PaperProgress.register('PaperProgress');

class PaperRipple extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.rippleElements = [];
    this.rippleCounter = 0;
  }

  /**
   * handle the down event
   * will create a ripple and append it to the `[data-id=waves]` element
   * @param {Event} the vent that triggered the function
   */
  onDown (event) {
    var rect = this.find('paper-ripple').getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;
    var fillX = Math.abs(width/2 - event.offsetX);
    var fillY = Math.abs(height/2 - event.offsetY);
    // get the maximum of both dimensions
    var containerSize = Math.max(width, height);
    // get tha needed fill value
    var fillSize =  Math.max(width + fillX*2, height + fillY*2);
    // scale to fill edges
    // TODO use trigonometric check?
    fillSize *= 1.1;
    ++this.rippleCounter

    // create an object with styles for the ripple
    // only dimensions and positions will be defined here
    var style = {
      left: (event.offsetX - fillSize/2) + 'px',
      top: (event.offsetY - fillSize/2) + 'px',
      height: fillSize + 'px',
      width: fillSize + 'px'
    };

    // create an element
    var waveContainer = document.createElement('div');
    waveContainer.className = 'wave-container';
    // set styles to element
    for (let prop in style) {
      waveContainer.style[prop] = style[prop]
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
    var waveContainer = this.rippleElements[this.rippleCounter -1];
    waveContainer.classList.add('remove');
    waveContainer.addEventListener('transitionend', () => {
       waveContainer.remove();
     });
  }
}

PaperRipple.register('PaperRipple');

class PaperSpinner extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {}

  /**
   * after render
   */
  onRendered () {}
}

PaperSpinner.register('PaperSpinner');

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

class PaperIconButton extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    this.active = new ReactiveVar(false);
  }

  /**
   * after render
   */
  onRendered () {
    // find the ripples container
    this.ripple = this.componentChildrenWith('rippleCounter')[0];
  }

  /**
   * get the pressed state of the button
   * @return {Boolean}  Returns the pressed state
   */
  getPressed () {
    return this.pressed.get();
  }

  /**
   * get the focused state of the button
   * @return {Boolean}  Returns the focused state
   */
  getFocused () {
    return this.focused.get();
  }

  /**
   * get the active state of the button
   * @return {Boolean}  Returns the active state
   */
  getActive () {
    return this.active.get();
  }

  /**
   * handle the focus event
   * 1. not focused while pressed
   */
  onFocus () {
    if (!this.pressed.get()) {
      this.focused.set('');
    }
  };
  /**
   * handle the blur event
   * 1. not focused
   */
  onBlur () {
    this.focused.set(false);
  }

  /**
   * handle the mousedown event
   * 1. pressed
   * 2. active
   * 3. not focused
   * 4. send event to ripple
   * @param  {Event}
   */
  onDown (event) {
    this.pressed.set('');
    this.active.set('');
    this.focused.set(false);
    this.ripple.onDown(event);
  }

  /**
   * handle the mouseup event
   * 1. only if pressed
   * 2. not pressed
   * 3. not active
   * 4. send event to ripple
   * @param  {Event}
   */
  onUp (event) {
    if(this.pressed.get()!==false) {
      this.pressed.set(false);
      this.active.set(false);
      this.ripple.onUp(event);
    }
  }

  /**
   * @return {Object}  The events
   */
  events () {
    return [{
      'blur': this.onBlur,
      'focus': this.onFocus,
      'mousedown': this.onDown,
      'mouseleave': this.onUp,
      'mouseup': this.onUp
    }];
  }
}


PaperIconButton.register('PaperIconButton')


//# sourceMappingURL=blaze-material-ui.es6.map

