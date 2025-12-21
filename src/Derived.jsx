import {useState} from "react";
import { Button } from "react-bootstrap";
function Derived(){
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const total=users.length;
    const last=users[users.length-1];
    const unique=[...new Set(users)].length

    return <div>
        Derived Component

        <h3>Last User: {last}</h3>
        <h3>Total Users: {total}</h3>
        <h3>Unique Users: {unique}</h3>


        <input type="text" placeholder="enter name" onChange={(event)=>setUser(event.target.value)}/>
        <Button onClick={() => setUsers(prevUsers => [...prevUsers, user])}
            >Add user</Button>
        <h3>{user}</h3>
        <h3>
            <ul>
                {users.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </h3>

        </div>;
}

export default Derived