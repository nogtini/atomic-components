const gulp = require('gulp')
const babel = require('gulp-babel')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles', 'image' ],

    compileTemplate () {
      return gulp.src('./assets/js/**/*.js')
        .pipe(babel({
          presets: ['react', 'es2015']
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
    },
    jsBundle () {
      return gulp.src('./assets/js/**/*.js')
        .pipe(webpackStream({
          output: {
            filename: 'app.js'
          },
          module: {
            loaders: [
              {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets: [
                    require.resolve('babel-preset-react'),
                    require.resolve('babel-preset-es2015')
                  ]
                }
              }
            ]
          },
          plugins: [
            /*
            new webpack.optimize.UglifyJsPlugin({ minimize: true }),
            new webpack.DefinePlugin({
              'process.env': {
                'NODE_ENV': JSON.stringify('production')
              }
            })
            */
          ]
        }, webpack))
        .pipe(gulp.dest('dist'))
    }
  }
}
