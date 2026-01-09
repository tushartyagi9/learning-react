import Subject from "./Subject"
import { BrowserRouter, Link, Route, Routes } from "react-router"

function ReactRouter(){
    return (
        <BrowserRouter>
            <nav style={{ marginBottom: 12 }}>
                <Link to="/">Home</Link>{" | "}
                <Link to="/contact">Contact</Link>{" | "}
                <Link to="/about">About</Link>{" | "}
            </nav>

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default ReactRouter

//Client side Routing: the page does not refresh after opening a new link just the new route opens
//it is fast
//eg: React Router
//Server side Routing: the page refresh
//it is slow
//eg: PHP,express,django