// reduce.js

const arr=[4,5,6,7,54];

const reducerFun=(acc,cur)=>acc+cur;

const output=arr.reduce(reducerFun,6);
console.log(output);

console.log(arr.reduce((acc,cur)=>acc+cur));