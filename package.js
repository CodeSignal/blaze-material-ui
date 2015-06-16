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

  // includes
  var css = [
    'layout/layout'
  ];
  var ironElements = [
    'IronIcon'
  ];
  var paperElemens = [
    'PaperProgress',
    'PaperMaterial',
    'PaperRipple',
    'PaperIconButton',
    'GhostButton',
    'PaperButton',
    'PaperFab'
  ];

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


  var files = [];
  var i = 0;

  for (i = 0; i < css.length; i++) {
    files.push('lib/' + css[i] + '.scss');
  }

  for (i = 0; i < ironElements.length; i++) {
    files.push('lib/iron-elements/' + ironElements[i] + '/' + ironElements[i] + '.tpl.jade');
    files.push('lib/iron-elements/' + ironElements[i] + '/' + ironElements[i] + '.scss');
    files.push('lib/iron-elements/' + ironElements[i] + '/' + ironElements[i] + '.es6');
  }

  for (i = 0; i < paperElemens.length; i++) {
    files.push('lib/paper-elements/' + paperElemens[i] + '/' + paperElemens[i] + '.tpl.jade');
    files.push('lib/paper-elements/' + paperElemens[i] + '/' + paperElemens[i] + '.scss');
    files.push('lib/paper-elements/' + paperElemens[i] + '/' + paperElemens[i] + '.es6');
  }


  api.addFiles(files,'client');

  api.addFiles(['blaze-material-ui.es6'],'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('codefights:blaze-material-ui');
  api.addFiles('blaze-material-ui-tests.js');
});
