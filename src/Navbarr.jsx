import { Link } from "react-router"
export default function Navbarr(){
    return <>
                <nav style={{ marginBottom: 12 }}>
                <Link to="/">Home</Link>{" | "}
                <Link to="/contact">Contact</Link>{" | "}
                <Link to="/about">About</Link>{" | "}
            </nav>
    </>
}