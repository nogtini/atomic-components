const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');
const batch = require('gulp-batch');

gulp.task('default', () => {
  gulp.start('moveStrings', 'compileTemplate', 'image', 'bundle');
});

gulp.task('compileTemplate', () => {
  return gulp.src('./src/components/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/components'));
});

gulp.task('moveStrings', () => {
  return gulp.src('./src/assets/strings.js')
    .pipe(gulp.dest('dist/assets/'));
});

gulp.task('image', () => {
  return gulp.src('./src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('bundle', () => {
  return gulp.src('./src/index.js')
    .pipe(webpack({
      output: {
        filename: 'client.js',
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015'],
            },
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
          },
        ],
      },
    }))
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('watch', () => {
  watch('./src/**/*.*', batch((events, done) => {
    gulp.start('default', done);
  }));
});
