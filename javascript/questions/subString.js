// print all the substrings of the given array
let stock="";
Myname="charusharma";
for(let i=0; i<Myname.length;i++){
    for(let j=i+1;j<Myname.length;j++){
        console.log(Myname.slice(i,j));
    }
}
