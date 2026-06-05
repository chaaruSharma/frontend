// A program that reads 3 strrings and prints the smallest string

const readline_Sync= require("readline-sync");
const String1=readline_Sync.question("enter the first string ");
const String2=readline_Sync.question("enter the second string ");
const String3=readline_Sync.question("enter the third string ");

const lengthOfString1=String1.length;
const lengthOfString2=String2.length;
const lengthOfString3=String3.length;

if(lengthOfString1<lengthOfString2&&lengthOfString1<lengthOfString3){
    console.log(`${String1} is the smallest string`);
}
else if(lengthOfString2<lengthOfString1&&lengthOfString2<lengthOfString3){
    console.log(`${String2} is the smallest string`);
    }
    else{
        console.log(`${String3} is the smallest string`);
    }


// if(String1>String2){
//     if(String2<String3){
//         console.log(`${String2} is smallest string`);
//     }
//     else{
//         console.log(`${String3} is smallest string`)

//     }}
//     else
//     {
//         if(String1<String3){
//             console.log(`${String1} is smallest string `);
//         }
//     }

