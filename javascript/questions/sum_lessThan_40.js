// sum of all the no less than 40

const arr=[19,23,4,43,46,76,56,45];
const result=arr.reduce((acc,cur) => cur<40?acc+cur:acc);
console.log(result);
