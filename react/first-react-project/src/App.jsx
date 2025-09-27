import Header from "./header";
import { useState } from "react";
import User from "./user";
function Apple(){
  const [count, setCount] = useState(0);
return (
  <div>
    <Header />
    <User />
    <h1>the sum of variable is {sum()}</h1>
    <h1>hello World</h1>
    <h2>code step by step</h2>
    <button onClick={() => setCount((count) => count + 1)}>count value : {count}</button>
   <Mango/>
   <Banana/>
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