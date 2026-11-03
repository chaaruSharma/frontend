// write a javascript function to extract unique characters from a string.

let c="adjfoijedjnj";
let unique_element=" ";
function getUnique(c){
    // let ans=' ';
    for(let i=0;i<c.length;i++){
        // unique_element=c[i];
        if(unique_element.indexOf(c[i])==-1){
         unique_element += c[i];
        }
    }
    console.log(unique_element);
}
getUnique(c);