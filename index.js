var sass = require("node-sass");

var types = sass.types;

console.time('native');
var result = sass.renderSync({
  file: "perftest-native.scss",
});
console.timeEnd('native');

console.time('js');
var result = sass.renderSync({
  file: "perftest-js.scss",
  functions: {
    "perftest-js($value)": function($value) {
      // just return the value
      return $value;
    },
  }
});
console.timeEnd('js');