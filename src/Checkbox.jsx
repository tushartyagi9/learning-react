import { useState } from "react"

function Checkbox(){
    const [text,setText]=useState([])
    const handleValue=(event)=>{
        if(event.target.checked){
            setText([...text,event.target.value])
        }
        else{
            setText([...text.filter((yo)=>yo!=event.target.value)])
        }
    }
    return <>
    <h3>Select your language</h3>
    <input
    type="checkbox"
    value="php"
    id="php"
    onChange={handleValue}
    />
    <label htmlFor="php">php</label>
    <br/>
    <input
    type="checkbox"
    value="js"
    id="js"
    onChange={handleValue}
    />
    <label htmlFor="js">js</label>
    <br/>
    <input
    type="checkbox"
    value="cpp"
    id="cpp"
    onChange={handleValue}
    />
    <label htmlFor="cpp">cpp</label>
    <br/>
    <input
    type="checkbox"
    value="java"
    id="java"
    onChange={handleValue}
    />
    <label htmlFor="java">java</label>
    <br/>

    <h3>{text.toString()}</h3>
    </>
}

export default Checkbox