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