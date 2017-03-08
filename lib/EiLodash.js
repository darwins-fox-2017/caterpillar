'use strict'

let lodash = {
  isEmpty: (arr) => {
    if (arr[0] == null || arr[0] === undefined) {
      return true
    } else {
      return false
    }
  },
  count: (arr, arrCount = 0) => {
    if (arr[0]) {
      arr.splice(0, 1)
      arrCount++
      return count(arr, arrCount)
    } else {
      return arrCount
    }
  },
  head: (arr) => {
    return arr[0]
  },
  tail: (arr) => {
    return arr.slice(1)
  },
  flatten: (arr) => {
    return arr.reduce((a, b) => {
      if (b[0] != null) {
        return a.concat(lodash.flatten(b))
      } else {
        return a.concat(b)
      }
    }, [])
  }
}

module.exports = lodash
