import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyApi(){

    const [data, setData] = useState([]);

    useEffect(() => {
        getUserData();
    }, []);

    async function getUserData(){
        let response = await fetch("http://localhost:3000/users");
        response = await response.json();
        setData(response);
    }

    async function deleteData(id) {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        });

        getUserData();
    }

    return (
        <>
            <h1>Json data is created by me..</h1>

            <ul>
                {data.map((item) => (
                    <li
                        key={item.id}
                        style={{ border: "5px solid black", marginBottom: "10px", padding: "10px" }}
                    >
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <p>Email: {item.email}</p>

                        <button onClick={() => deleteData(item.id)}>
                            Delete
                        </button>

                        <Link to={`/edit/${item.id}`}>
                            <button>Edit</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
