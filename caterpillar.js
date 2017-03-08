const lib = require('./lib/library');

// release 0

console.log(lib.isEmpty([1,2,3,4])) // false
console.log(lib.count([1,2,3,4,5,6])) // 6

// release 1

console.log(lib.head([1,2,3])); // 1
console.log(lib.tail([1,2,3])); // [2,3]
console.log(lib.flatten([1,[2,3],4,[5,[6,7]]])); //[1,2,3,4,5,6,7]
