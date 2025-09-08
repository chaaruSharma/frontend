// Generating Secret Code from a given string
//input=> prakash
// encode by chars => 22
// Output => rtcmcuj
//ASCII table
const readlineSync=require("readline-sync");
const input=readlineSync.question("Give your input here: ")
const data=require("readline-sync");
const shiftby=data.question("tell the position shift by :")

const getEncodeStr=function password(str,shiftby){
    let encodestr="";
    let currentpos=0,newpos=0;
    for(let i=0;i<input.length;i++){
        currentpos=input.charCodeAt(i);
        // console.log(currentpos);
        newpos=currentpos+shiftby;
        encodestr+= String.fromCharCode(newpos);
    }
    console.log(encodestr);
}
getEncodeStr(input,shiftby);