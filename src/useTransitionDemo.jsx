import { useTransition } from "react"
import { Button } from "react-bootstrap"

function UseTransitionDemo() {

    const [isPending, startTransition] = useTransition()

    const handlesubmit = async () => {
        await new Promise(res => setTimeout(res, 2000))
        console.log("submitted")
    }

    function CallForm() {

        const handleClick = () => {
            startTransition(async () => {
                await handlesubmit()
            })
        }

        return (
            <div>
                <input type="text" placeholder="Enter name" />
                <br /><br />
                <input type="password" placeholder="Enter password" />
                <br /><br />
                <Button onClick={handleClick} disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit"}
                </Button>
            </div>
        )
    }

    return (
        <>
            <CallForm />
        </>
    )
}

export default UseTransitionDemo
