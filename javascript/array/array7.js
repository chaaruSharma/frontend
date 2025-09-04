// Array Sort

const fruits= ["apple","cherry","banana","ball"];
fruits.sort();
console.log(fruits);

const number= [3,2,5,6,7,8,9,56,76,4,33,44];
//console.log(number.sort());
function sortInAscendingOrder(a,b){
    
    return a-b;
}
function sortInDescendingOrder(a,b){
    return b-a;
}

number.sort(sortInDescendingOrder)
console.log(number);
number.sort(sortInAscendingOrder);
console.log(number);