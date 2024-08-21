import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import './navbar.css';

export default function Navbar({ onSearch }) {   
    const [searchTerm, setSearchTerm] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <navbar className="mynav">
                <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>VeGo</h1>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="mysearch"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-btn" onClick={handleSearch}>
                    <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
                        <g className="search-path" fill="none" stroke="#848F91">
                            <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/>
                            <circle cx="8" cy="8" r="7"/>
                        </g>
                    </svg>
                </button>
                <ul className="mynav-list">
                    <li>Contact Us</li>
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
    );
}
