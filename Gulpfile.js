var gulp = require('gulp');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat-sourcemap');
var argv = require('yargs').argv;
var template = require('gulp-template');
var data = require('gulp-data');
var replace = require('gulp-replace');
var rename = require("gulp-rename");
var del = require('del');
var path = require('path');

var paths = {
  scripts: ['lib/**/*.es6'],
  styles: ['lib/**/*.scss'],
  templates: ['lib/**/*.tpl.jade']
};

gulp.task('clean', function(cb) {
  del(['./dist'], cb);
});

gulp.task('component', [], function() {
  return gulp.src('gulp/template/*')
    .pipe(template({name: argv.name}))
    .pipe(rename(function (path) {
      path.dirname = argv.name;
      path.basename = argv.name;
      if(path.extname === '.jade') {
        path.extname = '.tpl.jade';
      }
    }))
    .pipe(gulp.dest('./lib/'+ argv.type));
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(concat('blaze-material-ui.es6'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('styles', ['clean'], function() {
  return gulp.src(paths.styles)
    .pipe(concat('blaze-material-ui.scss'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('templates', ['clean'], function() {
  return gulp.src(paths.templates)
    .pipe(replace(/(.*)/ig, '  $1'))
    .pipe(replace(/  \n/ig, '\n'))
    .pipe(replace(/ \n/ig, '\n'))
    .pipe(replace(/\n+/ig, '\n'))
    .pipe(replace(/  $/ig, ''))
    .pipe(data(function(file) {
       var name = path.basename(file.path).replace('.tpl.jade','');
       return {name: name}
     }))
    .pipe(wrap('\n\ntemplate(name="<%= data.name %>")\n<%= data.contents %>',{}, {variable: 'data'}))
    .pipe(concat('blaze-material-ui.jade'))
    .pipe(gulp.dest('./dist'));
});


gulp.task('default', [ 'scripts', 'styles', 'templates']);



