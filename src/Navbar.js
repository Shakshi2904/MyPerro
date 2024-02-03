import react from "react";
import "./Navbar.css"
function Navbar(){
    return(
        <div>
            <div className="navbar">
            <div className="nav1">
                <div className="leftnav">
                <a href="" >Logo</a>
                </div>
                <div className="rightnav">
                <button>Login</button>
                <button>About us</button>
                <button>Contact us</button>
                </div>
            </div>
            <div className="nav2">
                <div className="selectbox">
                <select>
                <option selected="yes">Services</option>
                </select>
                <select>
                <option selected="yes">Review</option>
                </select>
                <select>
                <option selected="yes">........</option>
                </select>
                </div>
            </div>
            </div>
            <div className="name">
            <h1>MyPerro</h1>
            </div>
        </div>
    )
}
export default Navbar;