import "./Navbar.css"


function Navbar(){
    return(
        <div className="navbar">
            <span className="title">Organika</span>
            <ul>
                <li>Home</li>
                <li>catalog</li>
                <li>About</li>
            </ul>
        </div>
    );
}


export default Navbar;