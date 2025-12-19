import { useFormStatus } from "react-dom"
import { Button } from "react-bootstrap"

function UseFormStatuss() {

    const handlesubmit = async () => {
        await new Promise(res => setTimeout(res, 2000))
        console.log("submitted")
    }

    function CallForm() {
        const { pending } = useFormStatus() 
        console.log({ pending })

        return (
            <div>
                <input type="text" placeholder="Enter name" />
                <br /><br />
                <input type="password" placeholder="Enter password" />
                <br /><br />
                <Button type="submit" disabled={pending}>
                    {pending ? "Submitting..." : "Submit"}
                </Button>
            </div>
        )
    }

    return (
        <form action={handlesubmit}>
            <CallForm />
        </form>
    )
}

export default UseFormStatuss
