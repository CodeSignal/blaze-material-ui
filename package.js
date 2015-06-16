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
    'dist/blaze-material-ui.jade',
    'dist/blaze-material-ui.scss',
    'dist/blaze-material-ui.es6'
  ],'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('codefights:blaze-material-ui');
  api.addFiles('blaze-material-ui-tests.js');
});
