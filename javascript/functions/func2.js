//  first class function
//  A programming language is said to have First-class functions if functions in that language in that language
// are treated like other variable. so the fuctions can be assigned to any othe variables or passed as an argument or can be returned by another functions.

// 1
let arr=function(){
    console.log("hello");
}
arr();


//2
function wrapper(){
    return "welcome here";
}
function inner(sign,name){
    // let message=sign();
    console.log(sign(),name)
}
inner(wrapper,"charu");

//3
function first(){
   function one(){
    console.log("hello maam");
    
    }
    return one;
}
 first()();
 const second= first();
 console.log(first()());
 second();