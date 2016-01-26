Material = Material || {};

Material.IronIcon = IronIcon = class IronIcon extends BlazeComponent {

  constructor() {
    super();
  }

  onCreated() {
    this.ironIconService = Material.ironIconService;
  }
  /**
   * @param  {String} name  The name of the icon (category:iconName)
   * @return {String}       Retuns an SVG
   */
  getSVG(name) {

    let icon = this.data().icon.split(':');
    let group;
    let iconName;
    let svg;
    if (icon[1]) {
      group = icon[0];
      iconName = icon[1];
      svg = this.ironIconService.getIcon(group, iconName);

    } else {
      svg = '';
    }
    return svg;
  }

};

IronIcon.register('IronIcon');