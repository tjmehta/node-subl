var exec = require('child_process').exec;

function noop() {};

function filepathsInStack(stack) {
  var fileArray = stack.match(/\(.*\)/mg);

  return fileArray
    .filter(function (file) {
      return file.slice(0, 2) == '(/'; // filter filepaths that do not start with slash (internal node files)
    })
    .map(function (file) {
      return file.slice(1).slice(0, -1); // slice of parenthesis: (filepath) -> filepath
    })
  ;
}

var subl = module.exports = function (args, cb) {
  if (typeof args == 'string') {
    args = [args];
  }
  else if (!Array.isArray(args)) {
    throw new Error("'args' must be an array or a string");
  }
  cb = cb || noop;

  var sublCmd = 'subl '+args.join(' ');
  exec(sublCmd, cb);
};
subl.openError = function (err) {
  if (err.stack) {
    var args = ['-n'].concat(filepathsInStack(err.stack));
    subl(args);
  }
  else {
    throw new Error("'err' has no 'stack'");
  }
};