import { useEffect, useState } from "react";

export default function MyApi(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        getUserData();
    },[])

    async function getUserData(){
        const url="http://localhost:3000/users";
        let response=await fetch(url);
        response=await response.json();
        setData(response);
    }
    return <>
    <h1>Json data is created by me..</h1>
<ul>
    {
        data.map((item, index) => (
            <li key={index}>{item.name}</li>
        ))
    }
</ul>

    </>
}