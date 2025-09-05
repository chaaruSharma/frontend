//adding property to object

//computed property

const readlineSync= require("readline-Sync");
const key= readlineSync.question("What do you want to know about the candidate?");
console.log(key);

const obj= {
    name: "charu sharma",
    age: 21,
    course: "B.tech",
    college: "JVWU"
}
console.log(obj[key]);