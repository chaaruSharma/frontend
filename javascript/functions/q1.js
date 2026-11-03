// write a javascript function that returns array elements larger than a number.
let arr=[5,41,54,64,67,86];
let ask= require("readline-sync");
let n=ask.question("enter your number");
 function largeElemnt(){
    for(i=0;i<arr.length;i++){
        if(arr[i]>n){
        console.log(arr[i]);}
    }
}
largeElemnt(arr,n);