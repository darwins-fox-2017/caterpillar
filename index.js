var _ = require('./lib/lodash.js')

var array = [1,2,3,4,5,6]
var array2 = [1,[2,3],4,[5,[6,7]]]

console.log(_.isEmpty(array));
console.log(_.count(array));
console.log(_.head(array));
console.log(_.tail(array));
console.log(_.flatten(array2));
