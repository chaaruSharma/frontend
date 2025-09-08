// Palindrome string

function check(str){
let arr=[...str];

const reverse=(arr.reverse().join(""));
console.log(reverse);
if (reverse==str){
    console.log("it is a palindrome");
}
else{
    console.log("it is not a palindrome");
}}
check("charu");
check("madam");


// 02
function check_2(str_2){
    let reverse_2="";
    for(let i=str_2.length-1;i>=0;i--){
        reverse_2=reverse_2+ str_2[i];
    }
    console.log(reverse_2);
    (str_2==reverse_2)?console.log("palindrome\n"):console.log("Not a palindrome\n");
    // console.log(result);
}
check_2("charu");
check_2("madam");
