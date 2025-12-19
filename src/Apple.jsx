import { useState } from 'react'
function Login(){
//     function callFun(){
//   alert("Function Called!!")
// }

const [color,setColor]=useState("Blue")

const changeColor=()=>{
    setColor("Red")
}



const fruit=()=>{
    alert("Fruits!!!")
}

const hehe=(x)=>{
    if(x==1){
        alert("hello")
    }
}



const fun=()=>{
    console.log("Tushar is printed in log")
}
const UserObj={
    name:"Tushar",
    age:"20",
    email:"tushar@email"
}
    return <>
<img
src='https://picsum.photos/200/300'
alt='Tushar Tyagi'
class='Tushar'
/>

<ul>
  <li>First line</li>
  <li>Second Line</li>
  <li>Third Line</li>
</ul>

<div>my name is {UserObj.name}</div>
<div>my age is {UserObj.age}</div>

<button onClick={()=>fruit()}>Click for fruits</button>
<button onClick={()=>hehe(0)}>Click for fruits</button>

<button onClick={()=>fun()}>Click for Tushar</button>
<div></div>



<h1>{color}</h1>
<button onClick={()=>changeColor()}>Change Color</button>




{/* <button onClick={callFun}>Click me</button> */}
    </>
}



export default Login