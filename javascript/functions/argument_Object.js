// Argument object in non-arrow function
// arguments object is an array like object present locally inside a function
// and it contains value of all the arguments passed to a function.


function calculateTotal(){
    for(let value of arguments){
        console.log(value);
    }
}

calculateTotal(3,4,5,6,6,76,75);

function show(){
    arguments[0]=9;
    console.log(arguments);
}
show(34,44,67,44);