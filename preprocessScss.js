// ./path/to/module-exporting-a-function.js
const sass = require('node-sass');

module.exports = function processSass(data, filename) {
  return sass.renderSync({
    data: data,
    file: filename,
  })
  .css
  .toString('utf8');
};
