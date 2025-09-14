// promise -- promise is an object that has the status of an async operation, and its corresponding value.

// bookHotelAPI(hotelID,function(){
//     paymentAPI(hotelID,useImperativeHandle, function(){
//         showStatusAPI()
//     })
// })

// {
// stateRequest----> pending/fulfilled/rejected
// response----> value /error  } 


const URL="https://jsonplaceholder.typicode.com/todos/1";

let promise= fetch(URL);

// state of promise by default is pending
console.log(promise);
promise.then(function(response){
    console.log(response);
    return response.json();
}).then(function(data){
    console.log({data});
})

.catch(function(error){
    console.log("error occured",error);
});
