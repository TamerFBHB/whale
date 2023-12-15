import React from 'react';
import "./SeaStar.scss";
import star1 from "../../images/sea-star/star1.png";
import star2 from "../../images/sea-star/star2.png"
import star3 from "../../images/sea-star/star3.png"
import star4 from "../../images/sea-star/star4.png"
import star5 from "../../images/sea-star/star5.png"

const SeaStar = () => {
    return (
        <div className='sestar'>
            <img src={star1} alt='' className='star one' />
            <img src={star2} alt='' className='star two' />
            <img src={star3} alt='' className='star three' />
            <img src={star4} alt='' className='star four' />
            <img src={star5} alt='' className='star five' />
        </div>
    );
}

export default SeaStar;
