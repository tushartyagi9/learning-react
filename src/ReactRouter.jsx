import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
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
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
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

// BrowserRouter:
// This component enables client-side routing using the browser's History API.
// Routes:
// It is responsible for rendering the appropriate component based on the current URL.
// Route:
// Each Route component defines a path and the corresponding component to render when that path is matched.
// Link:
// A link used to navigate from one page to another page.