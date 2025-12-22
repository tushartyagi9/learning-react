import { useState } from "react"

const UseToggle=(defaultVal)=>{

    const [value,setValue]=useState(defaultVal)
    function ToggleValue(val){
        if(typeof val!='boolean'){
            setValue(!val)
        }
        else{
            setValue(val)
        }
    }
    return [value,ToggleValue]
}

export default UseToggle