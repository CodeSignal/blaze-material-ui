class MarkedElement extends BlazeComponent {

  /**
   * set defaults
   */
  onCreated() {}

  /**
   * after render
   */
  onRendered() {}

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
  getParsed() {
    var md = new Remarkable({
      html: true, // Enable HTML tags in source
      xhtmlOut: false, // Use '/' to close single tags (<br />)
      breaks: true, // Convert '\n' in paragraphs into <br>
      langPrefix: 'language-', // CSS language prefix for fenced blocks
      linkify: true, // Autoconvert URL-like text to links

      // Enable some language-neutral replacement + quotes beautification
      typographer: false,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: '“”‘’',

      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch ( err ) {}
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch ( err ) {}

        return ''; // use external default escaping
      }
    });

    return HTML.Raw(md.render(this.data().markdown)).value;
  }
}

MarkedElement.register('MarkedElement');