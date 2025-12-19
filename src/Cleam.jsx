import {useState} from "react";
import Tushar from "./Header";
function Yoyo(){
    //declared the name(what it will show in the first place)
    const [name,SetName]=useState("Tushar")
    //function to change setname
    const changeName=()=>{
        SetName("Sakshi")
    }
        const change2Name=()=>{
        SetName("Tushar")
    }
    const [Counter,SetCounter]=useState(0)
    const Count=()=>{
        SetCounter(Counter+1)
    }
    const PrevCount=()=>{
        SetCounter(Counter-1)
    }

    const [display,setDisplay]=useState(true);

return <>
<button onClick={()=>setDisplay(!display)}>Toggle</button>
{
display?<Tushar/>:null
}
<h1>{name}</h1>
<button onClick={()=>changeName()}>Change Your Name</button>
<button onClick={()=>change2Name()}>Change Your Name</button>
<h1>{Counter}</h1>
<button onClick={()=>Count()}>Increase</button>
<button onClick={()=>PrevCount()}>Decrease</button>
<br/>
<br/>
<br/>


</>
}

export default Yoyo