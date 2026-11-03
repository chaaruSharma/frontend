//write a javascript function that accepts a list of country names as input and returns the longest country name as output

let country=["australia","germany","united states of america"];
let ansindex=0;
function getlongestElement(){
for(let i=0;i<country.length;i++){
    let anslength=country[ansindex].length;
    let currentLength=country[i].length;
    if(currentLength>anslength){
        ansindex=i;
    }}
    return country[ansindex];
}
console.log(getlongestElement(country));
