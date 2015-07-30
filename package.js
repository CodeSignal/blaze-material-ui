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

    'lib/paper-elements/PaperDialog/PaperDialog.scss',
    'lib/paper-elements/PaperDialog/PaperDialog.tpl.jade',
    'lib/paper-elements/PaperDialog/PaperDialog.es6',

    'lib/paper-elements/PaperMenu/PaperMenu.scss',
    'lib/paper-elements/PaperMenu/PaperMenu.tpl.jade',
    'lib/paper-elements/PaperMenu/PaperMenu.es6',

    'lib/paper-elements/PaperDropdown/PaperDropdown.scss',
    'lib/paper-elements/PaperDropdown/PaperDropdown.tpl.jade',
    'lib/paper-elements/PaperDropdown/PaperDropdown.es6',

    'lib/paper-elements/PaperDropdownMenu/PaperMenu.scss',
    'lib/paper-elements/PaperDropdownMenu/PaperDropdownMenu.tpl.jade',
    'lib/paper-elements/PaperDropdownMenu/PaperDropdownMenu.es6',

    'lib/paper-elements/PaperItem/PaperItem.scss',
    'lib/paper-elements/PaperItem/PaperItem.tpl.jade',
    'lib/paper-elements/PaperItem/PaperItem.es6',

    'lib/paper-elements/PaperCheckbox/PaperCheckbox.scss',
    'lib/paper-elements/PaperCheckbox/PaperCheckbox.tpl.jade',
    'lib/paper-elements/PaperCheckbox/PaperCheckbox.es6',

    'lib/paper-elements/PaperRadioButton/PaperRadioButton.scss',
    'lib/paper-elements/PaperRadioButton/PaperRadioButton.tpl.jade',
    'lib/paper-elements/PaperRadioButton/PaperRadioButton.es6',

    'lib/paper-elements/PaperToggleButton/PaperToggleButton.scss',
    'lib/paper-elements/PaperToggleButton/PaperToggleButton.tpl.jade',
    'lib/paper-elements/PaperToggleButton/PaperToggleButton.es6',

    'lib/paper-elements/PaperMaterial/PaperMaterial.scss',
    'lib/paper-elements/PaperMaterial/PaperMaterial.tpl.jade',
    'lib/paper-elements/PaperMaterial/PaperMaterial.es6',

    'lib/paper-elements/PaperFab/PaperFab.scss',
    'lib/paper-elements/PaperFab/PaperFab.tpl.jade',
    'lib/paper-elements/PaperFab/PaperFab.es6',

    'lib/paper-elements/PaperButton/PaperButton.scss',
    'lib/paper-elements/PaperButton/PaperButton.tpl.jade',
    'lib/paper-elements/PaperButton/PaperButton.es6',

    'lib/paper-elements/PaperHeaderPanel/PaperHeaderPanel.scss',
    'lib/paper-elements/PaperHeaderPanel/PaperHeaderPanel.tpl.jade',
    'lib/paper-elements/PaperHeaderPanel/PaperHeaderPanelMain.tpl.jade',
    'lib/paper-elements/PaperHeaderPanel/PaperHeaderPanel.es6',

    'lib/paper-elements/PaperToolbar/PaperToolbar.scss',
    'lib/paper-elements/PaperToolbar/PaperToolbar.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbarTop.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbarMiddle.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbarBottom.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbar.es6',

    'lib/paper-elements/PaperIconButton/PaperIconButton.scss',
    'lib/paper-elements/PaperIconButton/PaperIconButton.tpl.jade',
    'lib/paper-elements/PaperIconButton/PaperIconButton.es6',

    'lib/paper-elements/PaperTab/PaperTab.scss',
    'lib/paper-elements/PaperTab/PaperTab.tpl.jade',
    'lib/paper-elements/PaperTab/PaperTab.es6',

    'lib/paper-elements/PaperTabs/PaperTabs.scss',
    'lib/paper-elements/PaperTabs/PaperTabs.tpl.jade',
    'lib/paper-elements/PaperTabs/PaperTabs.es6',

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
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanelMain.tpl.jade',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanelDrawer.tpl.jade',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanel.es6',


    //'dist/blaze-material-ui.jade',
    //'dist/blaze-material-ui.scss',
    //'dist/blaze-material-ui.es6'
  ],'client');

  // api.export('Material');
  api.export('Material');


});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('codefights:blaze-material-ui');
  api.addFiles('blaze-material-ui-tests.js');
});
