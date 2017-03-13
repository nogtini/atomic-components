const gulp = require('gulp')
const babel = require('gulp-babel')
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')

/*jjconst extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
  //disable: process.env.NODE_ENV === 'development'
})
*/

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles', 'image' ],

    compileTemplate () {
      return gulp.src('./assets/js/**/*.js')
        .pipe(babel({
          presets: ['react', 'es2015', 'stage-0']
        }))
        .pipe(gulp.dest('dist'))
    },
    compileStyles () {
      return gulp.src('./assets/styles/**/*.scss')
        .pipe(sass({
          includePaths: [ './node_modules' ]
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'))
    },
    image () {
      return gulp.src('./assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
    }
  }
}
