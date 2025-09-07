// destructuring Object

let obj= {
    name: "charu sharma",
    address:{
        city: "jaipur",
        state: "rajasthan",
        locality: "bagru"
    },
    courses: ["html","css","js","react","bootstrap"],
}

let{name, ...rest}=obj;
// console.log(obj.name,obj.address,obj.courses);
console.log(obj["name"]);