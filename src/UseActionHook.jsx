import { useActionState } from "react"
import { Button } from "react-bootstrap"

function UseActionHook(){
        const handleSubmit=async (prevData,formData)=>{
        let name=formData.get('name')
        let password=formData.get('password')

        {
            if(name && password){
            await new Promise(res=>setTimeout(res,1000))
            console.log("called!!!",name,password)
                return {message: "Data submitted",name, password}
            }
            else{
                return {error: "Enter correct info", name, password}
            }
        }
    }
    const [data,action,pending]=useActionState(handleSubmit,null)

    return <>
    <form action={action}>
    <input type="text" placeholder="enter you name.." name='name' defaultValue={data?.name}/>
    <br/>
    <input type="password" placeholder="enter you password.." name='password' defaultValue={data?.password}/>
    <br/>
    <Button style={{ backgroundColor: "purple", borderColor: "pink" }} type="submit"
    disabled={pending}
    >Submit</Button>
    </form>
    {
        data?.error && <span style={{color:"red"}}>{data?.error}</span>
        }
        {
        data?.message && <span>{data?.message}</span>
    }
    <h3>Name: {data?.name}</h3>
    <h3>Password: {data?.password}</h3>



    </>
}

export default UseActionHook