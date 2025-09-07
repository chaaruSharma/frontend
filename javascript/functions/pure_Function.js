// Pure Functions
// It takes an argument
// It should return something
// For same input you should get the same output
// the result should not be influenced by other parameter
// it should not mutate the original argument


function appendNumbers(arr){
     let newArr=[];
    newArr.push(...arr,5,6);
    return newArr;
}
console.log(appendNumbers([2,3,8,7]));