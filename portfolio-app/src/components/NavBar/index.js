import React from 'react';
import {Link} from "react-router-dom";
import '../NavBar/Nav.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" >Iván Sillas-Navarro</a>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="/">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact">Contact</Link>

                </li>
            </ul>
                
        </nav>
    );
};
    
export default NavBar;