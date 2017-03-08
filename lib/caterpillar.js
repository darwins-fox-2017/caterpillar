'use strict'

let caterpillar = {
  isEmpty: (param) => {
    if (param[0] === undefined || param[0] == null) {
      return true
    } else {
      return false
    }
  },

  count: (param, index = 0) => {
    if (param[0]) {
      index++
      return count(param.slice(1), index)
    } else {
      return index
    }
  },

  head: (param) => {
    return param[0]
  },

  tail: (param) => {
    return param.reverse()[0]
  },

  flatten: (param) => {
    return param.join().split(',').map(Number)
  }
}

module.exports = caterpillar
