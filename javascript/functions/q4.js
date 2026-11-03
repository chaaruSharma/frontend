//write a javascript function to count the number of vowels in a String argument

let string="lsjdifeiakeokdjo"
let vowels="aeiou";
let count=0;
function vowelCount(string){
    for(let i=0;i<string.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(string[i]==vowels[j]){
                count++;
            }
        }
    }return count;
}
console.log(vowelCount(string));