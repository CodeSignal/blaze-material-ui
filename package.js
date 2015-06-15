Package.describe({
  name: 'codefights:blaze-material-ui',
  version: '0.0.1',
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


  api.use([
    'peerlibrary:blaze-components',
    'grigio:babel',
    'reactive-var',
    'templating',
    'fourseven:scss'
  ]);

  api.use([
    'templating',
    'mquandalle:jade'
  ], 'client');

  api.addFiles([
    //Layout
    'layout/layout.scss',
    // CoreIcon
    'core-elements/CoreIcon/CoreIcon.jade',
    'core-elements/CoreIcon/CoreIcon.es6',
    // PaperShadow
    'paper-elements/PaperShadow/PaperShadow.jade',
    'paper-elements/PaperShadow/PaperShadow.es6',
    'paper-elements/PaperShadow/PaperShadow.scss',
    // PaperRipple
    'paper-elements/PaperRipple/PaperRipple.jade',
    'paper-elements/PaperRipple/PaperRipple.es6',
    'paper-elements/PaperRipple/PaperRipple.scss',
    // PaperFab
    'paper-elements/PaperFab/PaperFab.jade',
    'paper-elements/PaperFab/PaperFab.es6',
    'paper-elements/PaperFab/PaperFab.scss',
  ],'client');

  api.addFiles(['blaze-material-ui.es6'],'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('codefights:blaze-material-ui');
  api.addFiles('blaze-material-ui-tests.js');
});
