import Student from "./Student"

function ClassComponent(){
    return (
        <div style={{ backgroundColor: "purple", padding: 20 }}>
            <h2>ClassComponent</h2>
            <Student />
        </div>
    )
}

export default ClassComponent
