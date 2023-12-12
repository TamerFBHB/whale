import React from 'react';
import "./MainPage.scss";
import Home from '../Home/Home';
import NavBar from '../navBar/NavBar';
import Asets from '../asets/Asets';


const MainPage = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <Asets />
        </div>
    );
}

export default MainPage;
