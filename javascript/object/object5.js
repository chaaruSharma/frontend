//  for in

const obj= {
    name: "Prakash",
    City: "mumbai",
}
const isPropertyfound="city" in obj;
console.log(isPropertyfound);

for(let sub in obj){
    console.log(sub,obj[sub]);
}