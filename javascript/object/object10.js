// Object methods

const obj={
    value_1: 4,
    value_2: 54,
    value_4: 34
}
const value=Object.values(obj);
// console.log(value);

let sum=0;
function add(){
for( let i=0;i<value.length;i++){
    sum+=value[i];
}
    return sum;

}
// console.log(sum);
console.log( add());
