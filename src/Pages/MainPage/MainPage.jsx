import React, { useState } from 'react';
import "./MainPage.scss";
import Home from '../Home/Home';
import NavBar from '../navBar/NavBar';
import Asets from '../asets/Asets';
import SmallNavBar from '../SmallNavBar/SmallNavBar';
import BookDemos from '../BookDemos/BookDemos';
import Transform from '../transform/Transform';


const MainPage = () => {

    // open and close Small NavBar
    const [open, openState] = useState(0)
    return (
        <div>
            <NavBar open={open} openState={openState} />
            <SmallNavBar open={open} openState={openState} />
            <Home />
            <Asets />
            <BookDemos />
            <Transform />
        </div>
    );
}

export default MainPage;
