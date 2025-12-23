import { createContext, useState } from "react"
import College from "./College"

export const SubjectContext = createContext()

function ContextApi(){
    const subjects = ["Math", "Physics", "Chemistry", "Biology"]
    const [subject, setSubject] = useState(subjects[0])

    return (
        <SubjectContext.Provider value={{ subject, setSubject, subjects }}>
            <h1 style={{ backgroundColor: "red", padding: 10 }}>
                Context API
            </h1>

            <div style={{ margin: 10 }}>
                <label style={{ marginRight: 8 }}>Select subject:</label>
                <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                    {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            <College />
        </SubjectContext.Provider>
    )
}

export default ContextApi
