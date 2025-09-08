//add all the decreding no less than the passed argument


function recursive(num){
    if(num==1){
        return num;
    }
    return num +recursive(num-1);
}

console.log(recursive(33));


// find factorial of passed argument no 

function factorial(num){
    if(num==1){
        return num;
    }
    return num* factorial(num-1);
}
console.log(factorial(14));