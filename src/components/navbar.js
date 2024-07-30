import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import './navbar.css'

export default function Navbar()
{   
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const navigate = useNavigate();

    return(
        <div>
        <navbar className="mynav">
        <h1 onClick={()=>navigate("/home")} style={{cursor: "pointer"}}>Fashion Passion</h1>
        <input type="text" placeholder="Search" className="mysearch"></input>
        <button className="search-btn">
        <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title"></title><desc id="desc"></desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
        </button>
        <ul className="mynav-list">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>
                <i className="fa fa-user-circle" onClick={() => setDropdownOpen(!dropdownOpen)}></i>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <button className="sign-in-btn">
                            <FaGoogle className="sign-in-icon" style={{ color: '#DB4437' }} />
                                Sign in with Google
                            </button>
                            <button className="sign-in-btn">
                            <FaFacebookF className="sign-in-icon" style={{ color: '#3b5998' }} />
                                Sign in with Facebook
                            </button>
                            <button className="sign-in-btn">
                                Sign in with Hushh
                            </button>
                        </ul>
                    )}
            </li>
        </ul>
        </navbar>
        </div>
    )
}