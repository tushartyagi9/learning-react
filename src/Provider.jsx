import ContextData from "./ContextData"
import Consumer from "./Consumer"

function Provider() {
    const user = "tushar"

    return (
        <ContextData.Provider value={user}>
            <Consumer />
        </ContextData.Provider>
    )
}

export default Provider