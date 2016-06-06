Package.describe({
  name: 'codefights:blaze-material-ui',
  version: '0.1.13',
  // Brief, one-line summary of the package.
  summary: 'Material design components for blaze',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Code-Fights/blaze-material-ui.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // server dependencies
  api.use([
    'peerlibrary:blaze-components@0.14.0',
    'ecmascript@0.1.5',
    'reactive-var'
  ]);
  // client dependencies
  api.use([
    'peerlibrary:blaze-components@0.14.0',
    'mquandalle:jade@0.4.3',
    'fourseven:scss@3.3.3_3'
  ], 'client');



  api.addFiles([

    'vendors/remarkable/dist/remarkable.js',
    'vendors/highlight/styles/github.css',
    'vendors/autogrowtextarea/jquery.autogrowtextarea.js',

    'lib/layout/layout.scss',

    'lib/services/IconService.js',

    'lib/iron-elements/IronIcon/IronIcon.scss',
    'lib/iron-elements/IronIcon/IronIcon.tpl.jade',
    'lib/iron-elements/IronIcon/IronIcon.js',

    'lib/iron-elements/IronSelector/IronSelector.scss',
    'lib/iron-elements/IronSelector/IronSelector.tpl.jade',
    'lib/iron-elements/IronSelector/IronSelector.js',

    'lib/paper-elements/PaperRipple/PaperRipple.scss',
    'lib/paper-elements/PaperRipple/PaperRipple.tpl.jade',
    'lib/paper-elements/PaperRipple/PaperRipple.js',

    'lib/paper-elements/PaperDialog/PaperDialog.scss',
    'lib/paper-elements/PaperDialog/PaperDialog.tpl.jade',
    'lib/paper-elements/PaperDialog/PaperDialog.js',

    'lib/paper-elements/PaperMenu/PaperMenu.scss',
    'lib/paper-elements/PaperMenu/PaperMenu.tpl.jade',
    'lib/paper-elements/PaperMenu/PaperMenu.js',

    'lib/paper-elements/PaperDropdown/PaperDropdown.scss',
    'lib/paper-elements/PaperDropdown/PaperDropdown.tpl.jade',
    'lib/paper-elements/PaperDropdown/PaperDropdown.js',

    'lib/paper-elements/PaperDropdownMenu/PaperDropdownMenu.scss',
    'lib/paper-elements/PaperDropdownMenu/PaperDropdownMenu.tpl.jade',
    'lib/paper-elements/PaperDropdownMenu/PaperDropdownMenu.js',

    'lib/paper-elements/PaperMenuButton/PaperMenuButton.scss',
    'lib/paper-elements/PaperMenuButton/PaperMenuButton.tpl.jade',
    'lib/paper-elements/PaperMenuButton/PaperMenuButton.js',

    'lib/paper-elements/PaperItem/PaperItem.scss',
    'lib/paper-elements/PaperItem/PaperItem.tpl.jade',
    'lib/paper-elements/PaperItem/PaperItem.js',

    'lib/paper-elements/PaperInput/PaperInput.scss',
    'lib/paper-elements/PaperInput/PaperInput.tpl.jade',
    'lib/paper-elements/PaperInput/PaperInputContainer.tpl.jade',
    'lib/paper-elements/PaperInput/PaperInput.js',

    'lib/paper-elements/PaperToast/PaperToast.scss',
    'lib/paper-elements/PaperToast/PaperToast.tpl.jade',
    'lib/paper-elements/PaperToast/PaperToast.js',

    'lib/paper-elements/PaperCheckbox/PaperCheckbox.scss',
    'lib/paper-elements/PaperCheckbox/PaperCheckbox.tpl.jade',
    'lib/paper-elements/PaperCheckbox/PaperCheckbox.js',

    'lib/paper-elements/PaperRadioButton/PaperRadioButton.scss',
    'lib/paper-elements/PaperRadioButton/PaperRadioButton.tpl.jade',
    'lib/paper-elements/PaperRadioButton/PaperRadioButton.js',

    'lib/paper-elements/PaperToggleButton/PaperToggleButton.scss',
    'lib/paper-elements/PaperToggleButton/PaperToggleButton.tpl.jade',
    'lib/paper-elements/PaperToggleButton/PaperToggleButton.js',

    'lib/paper-elements/PaperMaterial/PaperMaterial.scss',
    'lib/paper-elements/PaperMaterial/PaperMaterial.tpl.jade',
    'lib/paper-elements/PaperMaterial/PaperMaterial.js',

    'lib/paper-elements/PaperFab/PaperFab.scss',
    'lib/paper-elements/PaperFab/PaperFab.tpl.jade',
    'lib/paper-elements/PaperFab/PaperFab.js',

    'lib/paper-elements/PaperButton/PaperButton.scss',
    'lib/paper-elements/PaperButton/PaperButton.tpl.jade',
    'lib/paper-elements/PaperButton/PaperButton.js',

    'lib/paper-elements/PaperTooltip/PaperTooltip.scss',
    'lib/paper-elements/PaperTooltip/PaperTooltip.tpl.jade',
    'lib/paper-elements/PaperTooltip/PaperTooltip.js',

    'lib/paper-elements/PaperHeaderPanel/PaperHeaderPanel.scss',
    'lib/paper-elements/PaperHeaderPanel/PaperHeaderPanel.tpl.jade',
    'lib/paper-elements/PaperHeaderPanel/PaperHeaderPanelMain.tpl.jade',
    'lib/paper-elements/PaperHeaderPanel/PaperHeaderPanel.js',

    'lib/paper-elements/PaperToolbar/PaperToolbar.scss',
    'lib/paper-elements/PaperToolbar/PaperToolbar.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbarTop.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbarMiddle.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbarBottom.tpl.jade',
    'lib/paper-elements/PaperToolbar/PaperToolbar.js',

    'lib/paper-elements/PaperIconButton/PaperIconButton.scss',
    'lib/paper-elements/PaperIconButton/PaperIconButton.tpl.jade',
    'lib/paper-elements/PaperIconButton/PaperIconButton.js',

    'lib/paper-elements/PaperTab/PaperTab.scss',
    'lib/paper-elements/PaperTab/PaperTab.tpl.jade',
    'lib/paper-elements/PaperTab/PaperTab.js',

    'lib/paper-elements/PaperTabs/PaperTabs.scss',
    'lib/paper-elements/PaperTabs/PaperTabs.tpl.jade',
    'lib/paper-elements/PaperTabs/PaperTabs.js',

    'lib/paper-elements/PaperProgress/PaperProgress.scss',
    'lib/paper-elements/PaperProgress/PaperProgress.tpl.jade',
    'lib/paper-elements/PaperProgress/PaperProgress.js',

    'lib/paper-elements/PaperSpinner/PaperSpinner.scss',
    'lib/paper-elements/PaperSpinner/PaperSpinner.tpl.jade',
    'lib/paper-elements/PaperSpinner/PaperSpinner.js',

    'lib/molecules/MarkedElement/MarkedElement.scss',
    'lib/molecules/MarkedElement/MarkedElement.tpl.jade',
    'lib/molecules/MarkedElement/MarkedElement.js',


    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanel.scss',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanel.tpl.jade',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanelMain.tpl.jade',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanelDrawer.tpl.jade',
    'lib/paper-elements/PaperDrawerPanel/PaperDrawerPanel.js'


  //'dist/blaze-material-ui.jade',
  //'dist/blaze-material-ui.scss',
  //'dist/blaze-material-ui.js'
  ], 'client');

  // api.export('Material');
  api.export('Material');


});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('codefights:blaze-material-ui');
  api.addFiles('blaze-material-ui-tests.js');
});
