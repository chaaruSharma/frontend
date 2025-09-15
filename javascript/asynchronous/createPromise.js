// Promise

const isRequestResolved= true;
let promise = new Promise((resolve,reject)=>{
    if(isRequestResolved){
        resolve("promise resolved");
    }
    else{
        const error=new error("something went wrong");
        reject(error);
    }

});
console.log(promise);
