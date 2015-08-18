class PaperTooltip extends BlazeComponent {


  constructor() {
    super();
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  /**
   * set defaults
   */
  onCreated() {
    this.hidden = new ReactiveVar(true);
    this.style = new ReactiveVar('');
    this.inDelay = this.data() && this.data().inDelay || 0;
    this.outDelay = this.data() && this.data().outDelay || 0;

  }

  position() {
    let top, right, bottom, left, transform;
    let props = this.data().position && this.data().position.trim().split(' ') || 'bottom';
    if (props.length === 1) {
      if (props[0] === 'top') {
        bottom = '100%';
        left = '50%';
        transform = 'translateX(-50%)';
      } else if (props[0] === 'bottom') {
        top = '100%';
        left = '50%';
        transform = 'translateX(-50%)';
      }

    } else if (props.length === 2) {
      if (props[0] === 'left') {
        left = '0%';
      } else if (props[0] === 'right') {
        right = '0%';
      } else if (props[0] === 'center') {
        left = '50%';
        transform = 'translateX(-50%)';
      }
      if (props[1] === 'top') {
        bottom = '100%';
      } else if (props[1] === 'bottom') {
        top = '100%';
      }
    }
    let style = {
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      transform: transform,
      webkitTransform: transform,
    };

    for (let prop in style) {
      this.firstNode().style[prop] = style[prop] || '';
    }
  }

  onDestroyed() {
    this.triggerNode.removeEventListener('mouseenter', this.show);
    this.triggerNode.removeEventListener('mouseleave', this.hide);
  }

  show() {

    this.showing = setTimeout(() => {
      this.hidden.set(false);
      this.entered = true;
    }, this.inDelay);
  }

  hide() {
    clearTimeout(this.showing);
    this.entered = false;
    setTimeout(() => {
      if (!this.entered) {
        this.hidden.set(true);
      }
    }, this.outDelay);
  }

  /**
   * after render
   */
  onRendered() {
    this.triggerNode = this.firstNode().parentNode;
    this.position();
    this.triggerNode.addEventListener('mouseenter', this.show);
    this.triggerNode.addEventListener('mouseleave', this.hide);

  }
}

PaperTooltip.register('PaperTooltip');