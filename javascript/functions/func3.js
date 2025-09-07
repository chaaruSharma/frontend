// Higher order function
// a fuction that accepts another function as an argument or returns a function or does both is called an higher order function.

// first class function
function wrapper(){
    return "welcome to gfg";
}

function greetMessage(wrapper){// higher order function
    console.log("charu",wrapper());
}
greetMessage(wrapper);


function second(){//higher order function
    return ()=>{//first class function
        console.log("hello from the inner function");
    }
}
second()();
const output=second();
output();