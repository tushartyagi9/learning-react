import { Link } from "react-router-dom";
import "./design.css";

function Navv() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <h2>Logo</h2>
      </Link>

      <ul className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/api">UsersData</Link></li>
        <li><Link to="/myapi">MyData</Link></li>

      </ul>
    </div>
  );
}

export default Navv;

/* =====================================================
   REACT ROUTER – QUICK REVISION NOTES
   ===================================================== */

/* 1. What is React Router
   - Library for client-side routing in React
   - Enables SPA navigation without page reload
   - URL changes render different components
   - Common package: react-router-dom
*/

/* 2. Basic Example of React Router
   - BrowserRouter wraps the entire app
   - Routes contains all Route components
   - Route maps a path to a component
   - Only one route renders at a time
   - React Router v6 uses element={<Component />}
*/

/* 3. Header with React Router
   - Header/Navbar is placed outside Routes
   - Use Link instead of <a> tag
   - Link prevents full page reload
   - Keeps React state intact
*/

/* 4. 404 Page and Redirection
   - path="*" is used for 404 (Page Not Found)
   - Navigate component is used for redirection
   - Useful for invalid routes or auth redirects
*/

/* 5. Nested Navigation with React Router
   - Routes can be nested inside other routes
   - Parent route holds shared UI
   - Outlet renders child route content
   - Sidebar/Header stays, content changes
*/

/* 6. Layout and Index Routes
   - Layout route provides common structure
   - Index route is default child route
   - Index loads when parent path matches exactly
*/

/* 7. Route Prefixes
   - Child routes inherit parent path automatically
   - Avoid repeating full paths
   - Makes routing cleaner and scalable
*/

/* 8. Dynamic Router in React JS
   - Used when URL contains variable data
   - Defined using :paramName
   - useParams() extracts dynamic values
   - Common for profiles, products, blogs
*/

/* 9. React Router Optional Segment
   - Makes part of URL optional
   - Same component handles multiple URL patterns
   - Useful for filters or optional IDs
*/

/* 10. NavLink and Active Class
   - NavLink works like Link but tracks active route
   - Automatically applies active styling
   - Used for menus and navigation bars
*/

/* ================= END ================= */

