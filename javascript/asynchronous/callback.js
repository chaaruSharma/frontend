// callback functions

// function a(wrapper){
//     console.log("hello");
//     wrapper();
// }
// function b(){
//     console.log("bye");
// }
// a(b);

setTimeout(function callback(){
    console.log("execution after a delay");
},4000);

fetch("https://.......")
.then(function(){
    //response logic
})