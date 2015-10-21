/**
 * @fileOverview
 * @name router.js
 * @author Gregor Adams <greg@codefights.com>
 * @license MIT
 */


Router.configure({
  // the default layout
  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  this.render('main');
});

Router.route('/paper-elements/paper-button', function () {
  this.render('paperButton');
});

Router.route('/paper-elements/paper-checkbox', function () {
  this.render('paperCheckbox');
});

Router.route('/paper-elements/paper-dialog', function () {
  this.render('paperDialog');
});

Router.route('/paper-elements/paper-fab', function () {
  this.render('paperFab');
});

Router.route('/paper-elements/paper-input', function () {
  this.render('paperInput');
});

Router.route('/paper-elements/paper-menu', function () {
  this.render('paperMenu');
});

Router.route('/paper-elements/paper-radio-button', function () {
  this.render('paperRadioButton');
});

Router.route('/paper-elements/paper-tabs', function () {
  this.render('paperTabs');
});

Router.route('/paper-elements/paper-toggle-button', function () {
  this.render('paperToggleButton');
});

Router.route('/paper-elements/paper-toolbar', function () {
  this.render('paperToolbar');
});
