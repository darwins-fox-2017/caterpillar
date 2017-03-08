'use strict'

let _ = require('./lib/caterpillar')

console.log(_.isEmpty([1, 2, 3]))
console.log(_.isEmpty([]))

console.log(_.head([5, 6, 7, 8, 9]))
console.log(_.tail([5, 6, 7, 8, 9]))

console.log(_.flatten([1, [2, 3], 4, [5, [6, 7]]]))
