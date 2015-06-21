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
    return this.svg.get()[this.data().icon];
  }

}

IronIcon.register('IronIcon');