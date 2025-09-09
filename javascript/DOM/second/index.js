let text=document.querySelector(".text");
// text.addEventListener("input",()=>{
//     console.log(text.value);
// })
// text.addEventListener("change",()=>{
//     console.log(text.value);
// })
// text.addEventListener("focus",()=>{
//     console.log(text.value);
// })

// text.addEventListener("mousedown",(event)=>{
//     console.log(event.button);
// })

document.body.addEventListener("mousedown",(event)=>{
    let xcor=event.clientX;
    let ycor=event.clientY;
    let cors=`X cor - ${xcor},y cor -${ycor}`;
    console.log(cors);
})
document.body.addEventListener("mousedown",(event)=>{
    let xcor=event.pageX;
    let ycor=event.pageY;
    let cors=`X cor - ${xcor},y cor -${ycor}`;
    console.log(cors);
})