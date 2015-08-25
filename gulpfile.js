var gulp = require('gulp');
var markdown = require('gulp-markdown');
var jade = require('gulp-jade');

/*
// Convert all MD files to HTML using the layout file
gulp.task('markdown_to_html', function () {
  return gulp.src('md/*.md')
    .pipe(markdown())
    .pipe(jade())
    .pipe(gulp.dest('blurbs'));
});
*/

// Let's make our index file
gulp.task('default', function(){
  gulp.src('./jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
});
