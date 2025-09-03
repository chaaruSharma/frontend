function findCharacter(text,char){
    const index=text.indexOf(char);
    if(index===-1){
        console.log("character not found");
    }
    else{
        return index;
    }
}
console.log(findCharacter("my self charu sharma","h"));