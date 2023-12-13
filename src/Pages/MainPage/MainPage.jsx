import React, { useState } from 'react';
import "./MainPage.scss";
import Home from '../Home/Home';
import NavBar from '../navBar/NavBar';
import Asets from '../asets/Asets';
import SmallNavBar from '../SmallNavBar/SmallNavBar';


const MainPage = () => {

    // open and close Small NavBar
    const [open, openState] = useState(0)
    return (
        <div>
            <NavBar open={open} openState={openState} />
            <SmallNavBar open={open} openState={openState} />
            <Home />
            <Asets />
        </div>
    );
}

export default MainPage;
