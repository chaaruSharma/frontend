const readlineSync = require("readline-sync");
const userAge = readlineSync.question("Please enter your age: ");
if (userAge >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}