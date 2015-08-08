class PaperInput extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);

    this.labelFloat = new ReactiveVar(false);

    let highlight = this.data().highlight;
    this.highlight = new ReactiveVar(highlight);

    let float = this.data().float;
    this.float = new ReactiveVar(float);
  }

  /**
   * after render
   */
  onRendered () {
  }

  /**
   * handle the focus event
   * 1. focused when pressed
   * 2. add is-highlighted class
   * @param  {Event}
   */
  onFocus(event) {
    if (this.disabled) {
      return
    };


    this.highlight.set('is-highlighted');

    this.focused.set(true);
  };

  /**
   * handle the blur event
   * 1. not focused
   * 2. remove focus
   * 3. remove highlight class
   * @param  {Event}
   */
  onBlur(event) {
    this.focused.set(false);
    this.highlight.set(false);

  }

  /**
   * handle keydown event
   * 1. check if labelfloat false/true
   * 2. add label-is-hidden class if false
   * 3. add label-is-float & label-is-highlighted if true
   * @param  {event}
   */
  onKeyDown(event) {
    if (this.data().labelFloat == 'false') {
      this.float.set('label-is-hidden');
    } else {
      this.float.set('label-is-floating label-is-highlighted');
    }
  }


  /**
   * @return {Object}  The events
   */
  events() {
    return [{
      'keydown input': this.onKeyDown,
      'blur input': this.onBlur,
      'focus input.paper-input': this.onFocus,
    }];
  }
}

PaperInput.register('PaperInput');