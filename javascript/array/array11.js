// copying an array --->  array reference
// speread operator   (...arrname);

let arr1 = [2,4,5,6];
let arr2= arr1;

console.log(arr1);
console.log(arr2);

arr1.push(8);
console.log(arr1);
console.log(arr2);

// Spread Operator
let arr3=[...arr1];
arr1.push(28);
console.log(arr1);
console.log(arr3);