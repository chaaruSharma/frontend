// optional chaining

const user={
    name: "charu sharma",
    age: "21",
    address:{//if it commented then it will give undefined
        city:"jaipur",// if it is commented it will give undefine and if object is also commented then it will give an error
        state:"Rajasthan"
        
    }
}

console.log(user);
console.log(user.address);

// sol -- 1

if(user.address==undefined){
    console.log("address is not find");
}
else{
    console.log(user.address);
}

// solution--2
//  object?.property

console.log(user.address?.city)


