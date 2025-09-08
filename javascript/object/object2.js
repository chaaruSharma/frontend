//  Function as Object Property

const obj ={
    name: "Charu Sharma",
    greetMessage: function(){
        console.log("Hello, charu welcome!");
    },
    bye(){
        console.log("Tata bye bye");
    }
}
obj.greetMessage();
obj.bye();
