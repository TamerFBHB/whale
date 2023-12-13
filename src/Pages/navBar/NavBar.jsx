import React from 'react';
import logo from "../../images/Logo.png"
import "./NavBar.scss"
import { NavLink } from 'react-router-dom';

const NavBar = ({open , openState}) => {
    return (
        <div className='navbar '>
            <div className='nav'>
                <div className='logo'>
                    <img src={logo} alt='' />
                    <h2>Whale Prospector</h2>
                </div >
                <div className='links'>
                    <NavLink >ShowCase</NavLink>
                    <NavLink >Pricing</NavLink>
                    <NavLink >Sign in</NavLink>
                    <div className='demo'>
                        Create Demo Generating Assets
                    </div>
                </div>
                
                <div className='bar' onClick={()=>{open === 0? openState(1) : openState(0)}}>
                    <div className={`one ${open === 1? "closeOne":""}`}></div>
                    <div className={`two ${open === 1? "hide":"apeare"}`}></div>
                    <div className={`three ${open === 1? "closethree":""}`}></div>
                </div>
                
            </div>
        </div>
    );
}

export default NavBar;
