import React from "react";
import logo from '../resources/logo-white.png'
import Navbar from './Navbar';
import './Header.css';

const Header = () => {

    return(
        <div id="header">
            <img 
                src={logo}
                id='header-logo'  
                alt="TEDx logo" 
            />
            <Navbar />
        </div>
    )
}

export default Header;