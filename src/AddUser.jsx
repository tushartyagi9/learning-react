import { useState } from "react"
import { toast } from "react-toastify"

function AddUser() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    async function getUserData() {

        // 🔴 validation
        if (!name || !age || !email) {
            toast.error("Please fill all the fields")
            return
        }

        const url = "http://localhost:3000/users"

        try {
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, age, email })
            })

            await response.json()

            toast.success("User added successfully!")

            // clear inputs
            setName('')
            setAge('')
            setEmail('')
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />

            <button onClick={getUserData}>Add User</button>
        </>
    )
}

export default AddUser
