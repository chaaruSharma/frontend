//slice(starting index,end index which is not included)

let courses=["html","css","js","reactjs"];
console.log( courses.slice(0,2));
 console.log(courses);


 let username="PRAKASH";
 let firstupperCase= username[0].toUpperCase();
 let capitalizeName=firstupperCase+username.slice(1).toLowerCase();
 console.log(capitalizeName);

 //pop( removes the last element of the array)

 let number=[3,4,5,6,6,7,8];
 number.pop();
 console.log(number.pop());

 console.log(number);