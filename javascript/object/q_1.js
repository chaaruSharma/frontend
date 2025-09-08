function displayName(){
    console.log(this);
}
const user2={
    name: "prakash",
    displayName,
};

user1.displayName();