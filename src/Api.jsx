import { useEffect, useState } from "react";

  export default function Api(){
  
  const [UserData,setUserData]=useState([])
  useEffect(()=>{
    getUserData();
  },[])

  async function getUserData(){
    const url="https://dummyjson.com/users";
    let response=await fetch(url);
    response=await response.json();
    setUserData(response.users);
    console.log(response);
  }
  return( 
  <div>
    <h1>Fetch data from API</h1>
    {    
    UserData.map((item)=>
      <ul key={item.id}   style={{
    backgroundColor: "pink",
    listStyle: "none"
  }}>
        <li style={{ border: "solid black 5px" }}>Name: {item.firstName} {item.lastName} <br/> Email:{item.email} <br/> Age:{item.age} </li>
      </ul>
    )
    }
  </div>
  )
  }