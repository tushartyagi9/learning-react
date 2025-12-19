import { useState } from "react"
function Input(){
    const [text,setText]=useState("")
    return <>
    <input style={{color:"white", height:"100px", width:"150px", fontSize:"20px"}}
    type="text"
    placeholder="Enter"
    value={text}
    onChange={(event)=>{
        setText(event.target.value)
    }}
    />
    <h1>{text}</h1>
    <button onClick={()=>setText("")}>Clear</button>
    </>
}

export default Input