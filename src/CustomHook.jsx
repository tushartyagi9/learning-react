import { Button } from "react-bootstrap";
import UseToggle from "./UseToggle";

function CustomHook(){
    const [val,ToggleVal]=UseToggle(true)

    return<>
    <Button onClick={()=>ToggleVal(!val)}>Toggle</Button>
    <Button onClick={()=>ToggleVal(true)}>Show</Button>
    <Button onClick={()=>ToggleVal(false)}>Hide</Button>
    {
    val? <h1>Hello I am here...</h1>:null
    }
    </>
    
}

export default CustomHook