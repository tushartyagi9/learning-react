import { useEffect, useState } from "react"

function Useeffect(){

    function callOnce(){
        console.log("Called",{count})
    }

    const [count,SetCount]=useState(0);


    useEffect(()=>{
        callOnce();
    },[{count}])//dependency.. if empty [] then will not be called again anyway
    //if not even [] then will be called(render) everytime 
    //can write [{state1,state2}] or props as well similarly

    return <>
    <button onClick={()=>SetCount(count+1)}>counter</button>
    </>
}

export default Useeffect

//this is how we solve sideeffects by using hook called useEffect()