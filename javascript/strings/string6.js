const displayMessage ="I love to code in dark modes";
const vowels ="aeiouAEIOU";
let flag=false;

for(let char of displayMessage){
    if(vowels.includes(char))
    {
        flag=true;
        break;
    }
    else{
        flag=false;
    }
}
if(flag){
    console.log("string has vowels");
}
else{console.log("string doesn't have vowels");}