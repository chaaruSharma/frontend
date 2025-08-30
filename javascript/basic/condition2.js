const readline= require("readline-sync");
const number= readline.question("Enter a number: ");
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}