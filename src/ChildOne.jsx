function ChildOne({setHee}){

    return <>
    <input type="text" placeholder="enter name" onChange={(event)=>setHee(event.target.value)}/>

    </>
}

export default ChildOne