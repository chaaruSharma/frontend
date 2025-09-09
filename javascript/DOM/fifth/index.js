const parentElement= document.getElementById("parent-container");

const cardContainer= document.createElement("div");
cardContainer.classList.add("card-container");

// creating card image element

const cardImageElement = document.createElement("img");
cardImageElement.classList.add("travel-card")
cardImageElement.setAttribute("src","download.jpeg");
cardImageElement.setAttribute(
    "alt","travel-card");
    cardContainer.appendChild(cardImageElement);
    const cardTextElement=document.createElement("div");
    cardTextElement.innerText="The journey of thousands miles begins with a single step.";
    

    
    cardContainer.appendChild(cardTextElement);
    
parentElement.appendChild(cardContainer);