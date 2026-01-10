import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


function EditUser() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    // fetch user by id
    useEffect(() => {
        getUserById()
    }, [])

    async function getUserById() {
        const response = await fetch(`http://localhost:3000/users/${id}`)
        const data = await response.json()

        setName(data.name)
        setAge(data.age)
        setEmail(data.email)
    }

    async function updateUser() {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                age,
                email
            })
        })
        toast.success("User updated successfully!")
        navigate("/myapi") // go back after update
    }

    return (
        <>
            <h2>Edit User</h2>

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

            <button onClick={updateUser}>
                Update User
            </button>
        </>
    )
}

export default EditUser
