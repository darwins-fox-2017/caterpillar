// RELEASE 0
function isEmpty(array) {
  if(array[0]){
    return false
  } else {
    return true
  }
}

console.log(":: RELEASE 0 => isEmpty() ::");
console.log(isEmpty([])); // return true
console.log(isEmpty([1, 2, 3])); // return false
console.log("");

function count(array, x = 0) {
  if(array[0]) {
    // console.log(array + 'test');
    array.splice(0,1)
    x++
    // console.log(x + 'testing');
    return count(array, x)
  } else {
    return x
  }
}

console.log(":: RELEASE 0 => count() ::");
console.log(count([])); // return 0
console.log(count([1, 2, 3])); // return 3
console.log("");

// RELEASE 1
function head(array) {
  return array[0]
}

console.log(":: RELEASE 1 => head() ::");
console.log(head([1, 2, 3])); // return 1
console.log(head([4, 5, 7])); // return 4
console.log("");


function tail(array) {
  return array.splice(1)
}

console.log(":: RELEASE 1 => tail() ::");
console.log(tail([1, 2, 3])); // return [2, 3]
console.log(tail([2, 3])); // return [3]
console.log("");

function flatten(array) {
  return array.join().split(',').map(Number);
}

console.log(":: RELEASE 1 => flatten() ::");
console.log(flatten([1, [2, 3], 4, [5, [6, 7]]])); // return [1, 2, 3, 4, 5, 6, 7]
console.log("");
