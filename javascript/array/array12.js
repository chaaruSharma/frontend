// Call by reference

let arr1=[3,4,5,6,7];
arr2=[];
for(let number of arr1){
    arr2.push(number);
}
console.log(arr1)
console.log(arr2);
arr2.push(23);
console.log(arr1);
console.log(arr2);