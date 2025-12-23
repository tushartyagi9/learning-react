import { useContext } from "react"
import { SubjectContext } from "./ContextApi"

function Student(){
    const { subject } = useContext(SubjectContext)
    return (
        <div style={{ backgroundColor: "pink", padding: 20 }}>
            <h2>Student</h2>
            <p>Selected subject: {subject}</p>
        </div>
    )
}

export default Student
