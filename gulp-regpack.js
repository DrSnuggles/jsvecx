// https://github.com/echeese/js1k-kit
const regpack = require('regpack');
//const gutil = require('gulp-util');
const through = require('through2'); // npm install --save through2

module.exports = function (options) {
  return through.obj((file, encoding, callback) => {
    const code = file.contents.toString(encoding);
    const compressed = regpack.cmdRegPack(code, options);
    file.contents = Buffer.from(compressed, encoding);
    callback(null, file);
  });
};
