// release 0

let isEmpty = (arr) => {
  return arr[0] == undefined
}

let count = (arr,countArr = 0) => {
  return isEmpty(arr) ? countArr : count(arr.slice(1) ,countArr+1)
}

console.log(isEmpty([1,2,3,4])) // false
console.log(count([1,2,3,4,5,6])) // 6

// release 1

let head = (arr) => {
  return arr[0]
}

let tail = (arr) => {
  return arr.slice(1)
}

let flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);

console.log(head([1,2,3])); // 1
console.log(tail([1,2,3])); // [2,3]
console.log(flatten([1,[2,3]]));
console.log(flatten([1,[2,3],4,[5,[6,7]]]));
