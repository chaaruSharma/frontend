// fuction Borrowing --- call, Apply, bind

const user1={
    name: "charu sharma",
    age: 43,
    displayMessage(){
        console.log(this.page);
    },
};

const user2={
    name: "komal kumawat",
    age: 3,
    displayMessage(){
        console.log(this.name);
    },
};

const user3={
    name: "ashish solanki",
    age: 34,
    displayMessage(){//implicit binding
        console.log(this.name);
    },
};

function sayHII(year,course){//explicit binding
    console.log(this.name,year,course);
}
sayHII.call(user1,3434, "cse");// explicit binding
sayHII.apply(user2,[5432,"cse"]);