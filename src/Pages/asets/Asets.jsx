import React from 'react';
import "./Asets.scss";
import rocks from "../../images/rocks.png";
import Herbs from "../../images/Herb.png";
import fish from "../../images/twoFish.png";
import herb from "../../images/smallHerb.png";
import star from "../../images/star.png";
import bubeles from "../../images/big-bubeles.png";
import sbubeles from "../../images/small-bubles.png";
import turtle from "../../images/turtle.png";


const Asets = () => {
    return (
        <div className='asets'>
            <div className='title'>
                <h1>6.731 <span>Assets</span> Created</h1>
            </div>
            <div className='num '>
                <div className='num-asets'>
                    <h1>1</h1>
                    <p className='frist'>Create or use a template.</p>
                    <p>What meme.GiF.or image do.</p>
                    <p>you want to personalize?</p>
                </div>

                <div className='num-asets'>
                    <h1>2</h1>
                    <p className='frist'>Upload list of accounts links.</p>
                    <p>We will pull business'logo or fav</p>
                    <p>icon onto your template</p>
                </div>

                <div className='num-asets'>
                    <h1>3</h1>
                    <p className='frist'>Automate email sending.</p>
                    <p>Type email and connect</p>
                    <p>gmail to automate sending.</p>
                </div>
            </div>
            <div className='rock '>
                <div className='image '>
                    <img src={rocks} alt='' className='big-rock' />
                    <img src={Herbs} alt='' className='Herbs' />
                    <img src={fish} alt='' className='two-fish' />
                    <img src={herb} alt='' className='herb' />
                    <img src={star} alt='' className='star' />
                </div>
                <div className='bubeles '>
                <img src={bubeles} alt='' className='bubele one' />
                <img src={bubeles} alt='' className='bubele two' />
                <img src={bubeles} alt='' className='bubele three' />
                <img src={bubeles} alt='' className='bubele four' />
                <img src={sbubeles} alt='' className='bubele s-one' />
                <img src={sbubeles} alt='' className='bubele s-two' />
                <img src={sbubeles} alt='' className='bubele s-three' />
                </div>
            </div>
            <div className='rectangle'></div>
            <img src={turtle} alt='' className='turtle' />
        </div>
    );
}

export default Asets;
