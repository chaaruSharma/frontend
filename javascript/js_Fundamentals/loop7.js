const readline= require("readline-sync");
const n= readline.question("enter a number");
let string="";
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        string+="*";
        console.log(string);
    }
    
}
