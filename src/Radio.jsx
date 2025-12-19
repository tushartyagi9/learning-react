import { useState } from "react"

function Radio(){
    const [gender,setGender]=useState("i")
    const handleValue=(event)=>{
    setGender(event.target.value)
    }
    return <>
    <input onChange={handleValue}
    type="radio" name="gender" value={"male"} id="male"
    />
    <label htmlFor="male">male</label>
    <br/>
    <input onChange={handleValue}
    type="radio" name="gender" value={"female"} id="female"/>
    <label htmlFor="female">female</label>
    <br/>

    <h3>{gender}</h3>


    </>
}

export default Radio