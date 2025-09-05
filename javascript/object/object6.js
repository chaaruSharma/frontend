// object reference and shallow copy

const person1 = {
    name: "charu",
    age: 21,
    education:{
        course:"b.tech",
        university: "jvwu"
    }
}
console.log(person1);
const person2=person1;
person2.name="aanchal";
console.log(person1);
console.log(person2);

person3= Object.assign({},person2);
person3.name="rashmi";
console.log(person2);
console.log(person3);