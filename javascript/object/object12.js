//  this keyword
// Refers to the object that is executing the function


const user1={
    name: "charu sharma",
    showname: function(){
        console.log(this.name);
    },
};
const user2={
    name: "aashish verma",
    showname: function(){
        console.log(this.name);
    },
};

const user3={
    name: "naveen kumar",
    showname: function(){
        console.log(this.name);
    },
};
user1.showname();
user2.showname();
user3.showname();