import { useState } from "react"

function Dropdown(){
    const [value,setValue]=useState("Delhi")
    const handleValue=(event)=>{
        setValue(event.target.value)
    }
    return <>
    <select onChange={handleValue}>
        <option value={"Delhi"}>Delhi</option>
        <option value={"Gurgaon"}>Gurgaon</option>
        <option value={"Noida"}>Noida</option>
        <option value={"Other"}>Other</option>

    </select>

    <h3>{value}</h3>

    </>
}

export default Dropdown