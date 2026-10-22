// make a to do app using javascript concept
const prompt=require("prompt-sync")();
let todo = [];
let req = prompt("mention your request -- ");
while(true){
    if(req=="quit"){
        console.log("quitting the app");
        break;
    }
     if(req=="list"){
        for(i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
    }
    else if(req=="add"){
        let task=prompt("what do you want to add -- ");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        index= prompt("tell the index you want to delete -- ");
        todo.splice(index,1);
        console.log("deleted");
    }
    else{
        console.log("wrong request mentioned");
    }
     req = prompt("mention your request -- ");
    
}