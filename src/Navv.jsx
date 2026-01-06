import { Link } from "react-router-dom";
import './design.css'

function Navv() {
  return (
    <div className="header">
      <div>
        <Link className="logo" to="/">
          <h2>Logo</h2>
        </Link>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navv;
