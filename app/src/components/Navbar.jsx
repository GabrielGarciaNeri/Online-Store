import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <span className="title">Organika</span>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li className="cart-container">
                    <Link to="/cart"> <i class="fa-solid fa-cart-shopping"></i> Cart</Link>
                </li>
            </ul>
        </div>
    );
}


export default Navbar;