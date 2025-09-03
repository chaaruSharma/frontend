const message= "i am charu sharma";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
vowels="aeiou";
flag=true;
for(let char of message){
    // let vowels= 
    if(vowels.includes(char.toLowerCase())){
        // console.log("it is a vowel");
        flag=true;
        // return flag;
       
    }
    else{
        flag=false;
        // return false;
    }
}
 if(flag){
    console.log("it is a vowel");
}
else{ 
console.log("it is not a vowel");}

