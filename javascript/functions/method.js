let ask= require("readline-sync");
let key= ask.question("enter your key");
let a= ask.question("write your first number");
let b= ask.question("write your second number");

const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
}
console.log(calculator.key(a,b));
console.log(calculator.sub(2,3));