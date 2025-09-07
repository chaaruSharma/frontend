//find square root and cube of every no stored in array

//01
const arr=[1,2,3,5,7,8];
function squareroot(){
    let squared=[];
    for(let number of arr){
        squared.push(number**2);

    }
    return squared;
}
console.log(squareroot());

function cuberoot(){
    let cube=[];
    for(let number of arr){
        cube.push(number**3);

    }
    return cube;
}
console.log(cuberoot());

// 02

const arr2=[2,4,5,6];

function square2( num){
    return num**2;
}
function cube2(num){
    return num**3;
}
function power4(num){
    return num**4;
}
function calculation(wrapper,arr2){
    let arr3=[];
    for(let num of arr2){
      arr3.push( wrapper(num));
    }
    return arr3;
}
console.log(calculation(square2,arr2));
console.log(calculation(cube2,arr2));
console.log(calculation(power4,arr2));


