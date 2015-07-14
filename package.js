Package.describe({
  name: 'codefights:blaze-material-ui',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // server dependencies
  api.use([
    'peerlibrary:blaze-components',
    'grigio:babel',
    'reactive-var',
  ]);
  // client dependencies
  api.use([
    'templating',
    'mquandalle:jade@0.4.3',
    'fourseven:scss',
  ], 'client');



  api.addFiles([

    'vendors/marked/lib/marked.js',

    'lib/layout/layout.scss',

    'lib/iron-elements/IronIcon/IronIcon.scss',
    'lib/iron-elements/IronIcon/IronIcon.tpl.jade',
    'lib/iron-elements/IronIcon/IronIcon.es6',

    'lib/iron-elements/IronSelector/IronSelector.scss',
    'lib/iron-elements/IronSelector/IronSelector.tpl.jade',
    'lib/iron-elements/IronSelector/IronSelector.es6',

    'lib/paper-elements/PaperRipple/PaperRipple.scss',
    'lib/paper-elements/PaperRipple/PaperRipple.tpl.jade',
    'lib/paper-elements/PaperRipple/PaperRipple.es6',

    'lib/paper-elements/PaperMaterial/PaperMaterial.scss',
    'lib/paper-elements/PaperMaterial/PaperMaterial.tpl.jade',
    'lib/paper-elements/PaperMaterial/PaperMaterial.es6',

    'lib/paper-elements/PaperFab/PaperFab.scss',
    'lib/paper-elements/PaperFab/PaperFab.tpl.jade',
    'lib/paper-elements/PaperFab/PaperFab.es6',

    'lib/paper-elements/PaperButton/PaperButton.scss',
    'lib/paper-elements/PaperButton/PaperButton.tpl.jade',
    'lib/paper-elements/PaperButton/PaperButton.es6',

    'lib/paper-elements/PaperToolbar/PaperToolbar.scss',
    'lib/paper-elements/PaperToolbar/PaperToolbar.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbar.es6',

    'lib/paper-elements/PaperIconButton/PaperIconButton.scss',
    'lib/paper-elements/PaperIconButton/PaperIconButton.tpl.jade',
    'lib/paper-elements/PaperIconButton/PaperIconButton.es6',

    'lib/paper-elements/PaperProgress/PaperProgress.scss',
    'lib/paper-elements/PaperProgress/PaperProgress.tpl.jade',
    'lib/paper-elements/PaperProgress/PaperProgress.es6',

    'lib/paper-elements/PaperSpinner/PaperSpinner.scss',
    'lib/paper-elements/PaperSpinner/PaperSpinner.tpl.jade',
    'lib/paper-elements/PaperSpinner/PaperSpinner.es6',

    'lib/molecules/MarkedElement/MarkedElement.scss',
    'lib/molecules/MarkedElement/MarkedElement.tpl.jade',
    'lib/molecules/MarkedElement/MarkedElement.es6',


    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanel.scss',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanel.tpl.jade',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanelMain.jade',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanelDrawer.jade',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanel.es6',


    //'dist/blaze-material-ui.jade',
    //'dist/blaze-material-ui.scss',
    //'dist/blaze-material-ui.es6'
  ],'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('codefights:blaze-material-ui');
  api.addFiles('blaze-material-ui-tests.js');
});
