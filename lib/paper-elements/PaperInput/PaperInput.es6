class PaperInput extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);
    this.value = new ReactiveVar(false);

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
   * 1. not focused while pressed
   * @param  {Event}
   */
  onFocus(event) {
    if (this.disabled) {
      return
    };


    this.highlight.set('is-highlighted');
    // this.float.set('label-is-floating label-is-highlighted');

    this.focused.set(true);
    console.log('oh yaaa');
  };

  /**
   * handle the blur event
   * 1. not focused
   * @param  {Event}
   */
  onBlur(event) {
    this.focused.set(false);
    this.highlight.set(false);
    // this.float.set(false);
    console.log('ya Im goone');

    if (this.data().value == '') {
      this.float.set(false);
      console.log('key up');
    }
  }

  onKeyDown(event) {
    this.float.set('label-is-floating label-is-highlighted');
    if (this.data().value == '') {
      console.log('key pressed');
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