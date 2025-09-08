// mask the last 4 characters with #
const readlineSync=require("readline-sync");
let input= readlineSync.question("enter the user Number");

// const input="23435677562135789";
let repeatstr="#".repeat(4);
console.log(input.slice(0,input.length-4)+repeatstr);
