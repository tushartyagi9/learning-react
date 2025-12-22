import { useState } from "react"

function ArrayState(){

    const [data,setData]=useState([
        'peter','sam','bruce'
    ])

    const [val,setVal]=useState('')

    const handleData=(event)=>{
        setData(prevdata=>[...prevdata,val])
        setVal("")

    }
    return <>

    {
        data.map((item,idx)=>(
            <h3 key={idx}>{item}</h3>
        ))
    }
    <input type="text" placeholder="enter your name for array" value={val} onChange={(e)=>setVal(e.target.value)}/>
    <button onClick={handleData}>Add name</button>
    
    </>
}

export default ArrayState