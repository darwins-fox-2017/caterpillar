// isEmpty
function isEmpty(arr) {
  if (arr[0] == null) {
    return  true;
  } else {
    return false;
  }
}
console.log('-----------------------------------');
let testArrEmpty = []
console.log('Test isEmpty() : ', testArrEmpty);
console.log(isEmpty(testArrEmpty))

// Count
let countArray = [1, 2, 3]

let countArr = arr => arr.reduce(
  (acc, val) => {
     return acc + 1
  })

  console.log('-----------------------------------');
  console.log('Count this array : ', countArray);
console.log(countArr(countArray));


// Get head of an array'

let headArrTest = [1, 2, 4];
let head = arr =>  arr[0]
console.log('-----------------------------------');
console.log('Head of this array : ', headArrTest);
console.log(head(headArrTest));

// Get tail of an array

let tailArrTest = [8, 9, 10]


let tail = arr => arr.slice(1, countArr(arr) - 1)
console.log('-----------------------------------');
console.log('The tail of this array : ', tailArrTest);
console.log(tail(tailArrTest));

// Flatten
let nestedArr = [1, [2, 3], 4, [5, [6, 7]]]
let flatten = nestedArr => nestedArr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ), []
)

console.log('-----------------------------------');
console.log('Flatten this nested array : ', nestedArr);
console.log(flatten(nestedArr));
