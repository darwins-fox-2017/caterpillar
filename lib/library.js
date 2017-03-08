const lib = {}

lib.isEmpty = (arr) => {
  return arr[0] == undefined
}

lib.count = (arr,countArr = 0) => {
  return lib.isEmpty(arr) ? countArr : lib.count(arr.slice(1) ,countArr+1)
}

lib.head = (arr) => {
  return arr[0]
}

lib.tail = (arr) => {
  return arr.slice(1)
}

lib.flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? lib.flatten(val) : val
  ),
  []
)

module.exports = lib
