//write a code to return the function of odd or even as requested

let readline=require("readline-sync");
let request=readline.question("enter your request here ");
let n=readline.question("enter your number");
function oddEvenTest(request){
    if(request=="even"){
        return (n)=>{
            console.log(n%2==0);
        }
    }else if(request=="odd"){
        return (n)=>{
            console.log(!(n%2==0));
        }
    } else{
        console.log("wrong request");
    }
}
oddEvenTest(request)(n);
console.log(!(4%2==0));