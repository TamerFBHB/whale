import React from 'react';
import "./Transform.scss";
import groupFish1 from "../../images/group-fish.png"
import groupFish2 from "../../images/blue-fish.png"
import { IoIosArrowForward } from "react-icons/io";
import envelope from "../../images/envelope.jpg";
import message from "../../images/message-icon.png"

const Transform = () => {
    return (
        <div className='transform'>
            <div className='title-transform'>
                <h1>Transform your outreach and 2x</h1>
                <h1>your conversions</h1>
                <p>Book demos through email like never before.</p>
            </div>

            <img src={groupFish1} alt='' className='group-1' />
            <img src={groupFish2} alt='' className='blueFish' />

            <div className='inputMail'>
                <h2>Enter your email to see personalization in action!</h2>
                <div className='inputs'>
                    <input type='text' placeholder='First Name' />
                    <input type='mail' placeholder='email@domain.com' />
                    <button className='btn'>
                        <IoIosArrowForward className='icon' />
                    </button>
                </div>
            </div>

            <div className='card-mail-sarah'>
                <div className='head-card-mail'>
                    <div className='mail'>
                        <img src={envelope} alt='' className='envelop' />
                        <h5>Mail</h5>
                    </div>
                    <h6>2m ago</h6>
                </div>
                <div className='body-card-mail'>
                    <h5>Sarah</h5>
                    <h5>Our solution</h5>
                    <h6>Booked a time on your calender!</h6>
                </div>
            </div>

            <div className='card-mail-tomas'>
                <div className='head-card-mail'>
                    <div className='mail'>
                        <img src={envelope} alt='' className='envelop' />
                        <h5>Mail</h5>
                    </div>
                    <h6>10m ago</h6>
                </div>
                <div className='body-card-mail'>
                    <h5>Thomas</h5>
                    <h5>Reaching out</h5>
                    <h6>You got my attention. Send me some times.</h6>
                </div>
            </div>

            <div className='card-mail-sales'>
                <div className='head-card-mail'>
                    <div className='mail'>
                        <img src={message} alt='' className='envelop' />
                        <h5>Vs of Sales</h5>
                    </div>
                    <h6>now</h6>
                </div>
                <div className='body-card-mail'>
                    <h6>You are killing it ! How are you booking so many demos?!?!</h6>
                </div>
            </div>

            <div className='card-mail-Follow'>
                <div className='head-card-mail'>
                    <div className='mail'>
                        <img src={message} alt='' className='envelop' />
                        <h5>Follow AE</h5>
                    </div>
                    <h6>now</h6>
                </div>
                <div className='body-card-mail'>
                    <h6>Dude..Can you show me how you are filling up your calender</h6>
                </div>
            </div>

            <div className='card-mail-manager'>
                <div className='head-card-mail'>
                    <div className='mail'>
                        <img src={message} alt='' className='envelop' />
                        <h5>Sales Manager</h5>
                    </div>
                    <h6>now</h6>
                </div>
                <div className='body-card-mail'>
                    <h6>Any chance on our team call you can share how are scheduling so many calls</h6>
                </div>
            </div>


        </div>
    );
}

export default Transform;

