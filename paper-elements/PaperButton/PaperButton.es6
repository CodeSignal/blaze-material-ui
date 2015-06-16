class PaperButton extends BlazeComponent {

  onCreated () {
    this.elevation = new ReactiveVar(1);
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    this.active = new ReactiveVar(false);
  }

  onRendered () {
    this.ripple = this.componentChildrenWith('ripples')[0];
  }

  setElevation (elevation) {
    this.elevation.set(elevation);
  }

  getElevation () {
    return this.elevation.get();
  }
  getPressed () {
    return this.pressed.get();
  }
  getFocused () {
    return this.focused.get();
  }
  getActive () {
    return this.active.get();
  }

  onFocus (event) {
    if (!this.pressed.get()) {
      this.focused.set('');
    }
    this.setElevation(3);
  };

  onBlur (event) {
    this.focused.set(false);
    this.setElevation(1);
  }

  onDown (event) {
    this.pressed.set('');
    this.active.set('');
    this.focused.set(false);
    this.ripple.onDown(event);
    this.setElevation(2);
  }

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
