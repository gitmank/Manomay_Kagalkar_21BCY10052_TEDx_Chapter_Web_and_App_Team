import React from "react";
import { NavLink } from "react-router-dom";
import { navlinks } from "../constants";

const Navbar = () => {
    return(
        <>
            <div id='navbar'>
            {
                navlinks.map((item, index) => {
                    return <NavLink className='navlink' to={item.link}>{item.text}</NavLink>
                })
            }
            </div>
        </>
    )
}

export default Navbar;