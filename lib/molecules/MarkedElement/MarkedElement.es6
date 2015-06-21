class MarkedElement extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated () {
  }

  /**
   * after render
   */
  onRendered () {
  }

  /**
   * Run markdown via the 'marked.js' library
   * https://github.com/chjj/marked
   * @return {String} Returns raw HTML as a string
   * @usage
   *
   *   ### Spacebars
   *   ```handlebars
   *   <div>{{{getParsed}}}</div>
   *   ```
   *
   *   ### Jade
   *   ```jade
   *   div!=getParsed
   *   ```
   */
  getParsed () {
    return HTML.Raw(marked(this.data().markdown)).value;
  }
}

MarkedElement.register('MarkedElement');