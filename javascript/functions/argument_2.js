function calculateTotal(){
    let sum=0;
    console.log(arguments.length);
    for(let value of arguments){
        sum +=value;
    }
    const arr =[...arguments];
    console.log(arguments);
    console.log(arr);
}
calculateTotal(3,4,65,64,43,45);