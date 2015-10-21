var gulp = require('gulp');
var argv = require('yargs').argv;
var template = require('gulp-template');
var rename = require("gulp-rename");


gulp.task('component', [], function() {
  return gulp.src('gulp/template/*')
    .pipe(template({name: argv.name}))
    .pipe(rename(function (path) {
      path.dirname = argv.name;
      if(path.basename !== 'README') {
        path.basename = argv.name;
      }
      if(path.extname === '.jade') {
        path.extname = '.tpl.jade';
      }
    }))
    .pipe(gulp.dest('./lib/'+ argv.type));
});


