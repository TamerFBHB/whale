import React from 'react';
import { NavLink } from 'react-router-dom';
import "./SmallNavBar.scss"

const SmallNavBar = ({open }) => {
    return (
        <div className={`SmallNav ${open === 1? "down" : "up"}`}>

            <div className={`links `}>
                <NavLink >ShowCase</NavLink>
                <NavLink >Pricing</NavLink>
                <NavLink >Sign in</NavLink>
                <div className='demo'>
                    Create Demo Generating Assets
                </div>
            </div>
        </div>


    );
}

export default SmallNavBar;
