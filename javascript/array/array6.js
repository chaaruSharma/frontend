// includes
// arr.includes(any)

const availableSize = ["S","M","L","XL","XXL","XXXL"];
const readlineSync = require("readline-sync");
const userSize= readlineSync.question("Which size of shirt do you want?");
const isSizeAvailable=availableSize.includes(userSize);
if(isSizeAvailable){
    console.log("size is available");
}
else{
    console.log("size is not available");
}