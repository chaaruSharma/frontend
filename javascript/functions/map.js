//map
// square of element of an array using map

const arr=[2,3,4,5,6,7,5,4];

function square(num){
    return num**2;
}
const output=arr.map(square);
console.log(output);
arr.map((num)=>console.log(square(num)));

// const output_1=arr.map((number,index)=> 
//     {console.log(index);
//     return number**2;})
//     console.log(output_1,index);