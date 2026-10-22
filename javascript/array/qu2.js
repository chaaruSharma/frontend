//guess a random integer no by taking the maximum value as an input by the user using random math operator.



const prompt= require("prompt-sync")();
const max= prompt("enter the max number");
let random= Math.floor(Math.random()*max)+1;
let guess=prompt("enter your guess here....");
while(true){
    if(guess=="quit"){
        console.log("you are quitting the game");
        break;
    }
    else if(guess==random){
        console.log("your guess is right");
        console.log(random);
        break;
    }
    else{
        console.log("your guess is wrong")
    }
    guess=prompt("enter your guess here---- ");
}