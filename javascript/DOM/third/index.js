// index bubbling and capturing

let form = document.querySelector("#form");
let div = document.querySelector("#div");
let p = document.querySelector("#p");

p.addEventListener("click",()=>{
    alert("para tag");
})
div.addEventListener("click",()=>{
    alert("div tag");
})
form.addEventListener("click",()=>{
    alert("form tag");
})

