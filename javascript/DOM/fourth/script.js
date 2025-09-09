let btncContainer=document.querySelector("#btn-container");


btncContainer=addEventListener("click",(event)=>{
    let btnText=event.target.innerText;
    console.log(btnText);
    if(btnText==="RED"){
        event.target.classList.toggle("btn");
    }
})