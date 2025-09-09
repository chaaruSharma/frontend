// let StartBtn = document.getElementById("btn-start");
// console.log(StartBtn);

// let stopbtn= document.getElementById("btn-stop");
// console.log(stopbtn);

// let StartBtn= document.querySelector(".inline");
// console.log(StartBtn);

// let resetBtn= document.querySelector("#btn-reset");
// console.log(resetBtn);

// let stopbutton= document.querySelector("#btn-stop"); 
// console.log(stopbutton);
// let button=document.querySelectorAll(".inline");
// console.log(button[2]);

let StartBtn =document.querySelector(".startBtn");
let StopBtn=document.querySelector(".stopBtn");
let ResetBtn=document.querySelector(".resetBtn");

let value=0;
function showMessage(){
    console.log("Button-clicked");
}

StartBtn.addEventListener("click",showMessage);
StartBtn.addEventListener("click",()=>{
    if(StartBtn.innerText==="start"){
        StartBtn.innerText="begin"
    }
    else{
        StartBtn.innerText="start";
    }
});
StopBtn.addEventListener("click",()=>{
    StopBtn.removeAttribute("id");
// StopBtn.classList.add("btnWhite");})
StopBtn.classList.toggle("btnWhite");})
    // StopBtn.addEventListener("click",showMessage);