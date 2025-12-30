import { useContext } from "react";
import ContextData from "./ContextData";

function Consumer() {
    const user = useContext(ContextData)

    return (
        <>
            hello {user}
        </>
    )
}

export default Consumer
