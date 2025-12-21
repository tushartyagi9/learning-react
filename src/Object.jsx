import { useState } from "react"

function Object(){

        const [data,setData]=useState(
        {
        name:"Tushar",
        age:20,
        college:"BMU"
    })

    const handleData=(event)=>{
        setData({
            ...data,  
            // we use this because if we dont, then by changing the key of the object the state 
            // cannot understand 
            //what has happened and it wwhether it has to updat ethe value or not
            //so we have to change the reference
            //this thing will create a new object copy and things will work good now
            name:event.target.value
        }
        )
    }
    return <>
    <input type="text" placeholder="enter your name for object" onChange={handleData}/>
    <h3>{data.name}</h3>
    <h3>{data.age}</h3>
    <h3>{data.college}</h3>
    </>
}

export default Object