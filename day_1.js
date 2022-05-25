//     Question: https://practice.geeksforgeeks.org/problems/reverse-an-array/0

function reverse(a, n) {
  var rArray = [];
  for (var i = n - 1; i >= 0; i--) {
    rArray.push(a[i]);
  }
  var str = rArray.join(" ");
  return str;
}

var arr = [1, 2, 3, 4];
var n = arr.length;
// console.log(arr);
console.log(reverse(arr, n));

// https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1
let array = [1, 5, 2, 4, 6, -1, 7];

function returnMaxMinElement(array) {
  if (array.length === 0) {
    console.log("Array is Emmpty!");
    return;
  }
  let minElement = array[array.length - 1];
  let maxElement = array[array.length - 1];
  for (let index = 0; index <= array.length - 2; index++) {
    if (array[index] > maxElement) {
      maxElement = array[index];
    }
    if (array[index] < minElement) {
      minElement = array[index];
    }
  }
  console.log(minElement, maxElement);
  return minElement, maxElement;
}

returnMaxMinElement(array);
