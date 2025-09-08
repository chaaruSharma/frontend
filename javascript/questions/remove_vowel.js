// remove vowels from string

const string="The quick brown fox jumps over the lazy dog";
 
function get(str){
    const vowels=["a","e","i","o","u"];
    let result="";
    for(let char of str){
      
        if(!vowels.includes(char.toLowerCase())){
            result=result+char;
        }

    }
        return result;

}
console.log(get(string));