class PaperFab extends BlazeComponent {

  onCreated () {
    this.z = new ReactiveVar(1);
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    this.active = new ReactiveVar(false);
  }

  onRendered () {
    this.ripple = this._componentInternals.componentChildren.get()[0];
  }

  setZ (index) {
    this.z.set(index);
  }

  getZ () {
    return this.z.get();
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
    this.setZ(3);
  };

  onBlur (event) {
    this.focused.set(false);
    this.setZ(1);
  }

  onDown (event) {
    this.pressed.set('');
    this.active.set('');
    this.focused.set(false);
   this.ripple.onDown(event);
    this.setZ(2);
  }

  onUp (event) {
    this.pressed.set(false);
    this.active.set(false);
    this.ripple.onUp(event);
    if (this.focused.get()) {
      this.setZ(3);
    }
    else {
      this.setZ(1);
    }
  }

  events () {
    return [{
      'blur': this.onBlur,
      'focus': this.onFocus,
      'mousedown': this.onDown,
      'mouseup': this.onUp
    }];
  }
}


PaperFab.register('PaperFab')
