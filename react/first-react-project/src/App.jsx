import Header from "./header";
import { useState } from "react";
import User from "./user";
var name="john doe";
function Apple(){
  const [count, setCount] = useState(0);
  const userobj={
    name:"charu sharma",
    email:"charu@gmail.com",
    age: 20
  }
return (
  <div>
    <Header />
    <User />
    <p>{userobj.name} email address is {userobj.email} and age is {userobj.age}</p>
      <h1>the sum of variable is {sum()}</h1>
    <h1>hello World</h1>
    <h2>code step by step</h2>
    <button onClick={() => setCount((count) => count + 1)}>count value : {count}</button>
   <Mango/>
   <Banana/>
    <Name/>
  </div>
)
}

function Banana(){
  return(
    <h1>Banana Component</h1>
  )
}
function Mango(){
  return(
    <h1>Mango Component</h1>
  )
}
function sum(){
  let a=24;
  let b=33;
  return a+b;
}

// export default Mango;
// export default Banana;
export default Apple;

export function Name(){
  var x=33;
  var y=67;
  var sum=x+y;

  return(
    <div>
      <div>{name?name: "user not found"}</div>
<h3>{sum}</h3>
  <h1>the name of him is {name}and id is {sum}</h1>
  
</div>)
}