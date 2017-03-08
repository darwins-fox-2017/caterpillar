const _ = require('./lib/EiLodash')

console.log('isEmpty => ', _.isEmpty([])) // true
console.log('isEmpty => ', _.isEmpty([1, 2, 3])) // false

console.log('head => ', _.head([1, 2, 3])) // 1
console.log('head => ', _.head([4, 5, 7])) // 4

console.log('tail => ', _.tail([1, 2, 3])) // [2,3]
console.log('tail => ', _.tail([2, 3])) // [3]

console.log('flatten => ', _.flatten([1, [2, 3], 4, [5, [6, 7]]])) // [1,2,3,4,5,6,7]
