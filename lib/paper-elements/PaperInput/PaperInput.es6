class PaperInput extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
    this.focused = new ReactiveVar(false);
    this.pressed = new ReactiveVar(false);

    this.highlight = new ReactiveVar(this.data().highlight);
    this.float = new ReactiveVar(this.data().float);

    this.empty = new ReactiveVar(this.data().value?false:true);
    this.textarea = new ReactiveVar(this.data().type === 'textarea'?true:false);
  }

  /**
   * after render
   */
  onRendered () {
    this.onKeyUp();
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
   * handle keyup event
   * @param  {event}
   */
  onKeyUp(event) {

    let input = this.find('input') || this.find('textarea');
    if ((input && input.value.length <= 0)) {
      this.empty = true;
    } else {
      this.empty = false;

    }


    if (this.empty) {
      this.float.set('');
    } else if (this.data().labelFloat === 'false') {
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
      'keyup textarea': this.onKeyUp,
      'keyup input': this.onKeyUp,
      'blur textarea': this.onBlur,
      'blur input': this.onBlur,
      'focus input': this.onFocus,
      'focus textarea': this.onFocus,
    }];
  }
}

PaperInput.register('PaperInput');