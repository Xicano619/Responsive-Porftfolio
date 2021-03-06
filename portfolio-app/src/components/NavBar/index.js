import React from 'react';
import BioPage from '../../pages/Main';
import ContactPage from '../../pages/Contact';
import PortfolioPage from '../../pages/Portfolio';


const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" >Iván Sillas-Navarro</a>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href={BioPage}>About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={PortfolioPage}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={ContactPage}>Contact</a>

                </li>
            </ul>
                
        </nav>
    );
};
    
export default NavBar;