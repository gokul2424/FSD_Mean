var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('default', function() {
  gulp.src('file.txt')
    .pipe(rename({ basename: 'core.config'}))
    .pipe(gulp.dest('core'));
});