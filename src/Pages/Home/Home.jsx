import React from 'react';
// import wave from "../../images/wave.png"
import laptop from "../../images/labtop.png"
import "./Home.scss";

const Home = () => {
    return (
        <div className='home'>
            <div className='inform'>
                <h1>Create Personalized Assets</h1>
                <h1>for You Prospecting Emails Fast</h1>
                <p>Whale Hunter is the Al Sales Prospecting tool that help quickly create</p>
                <p>Personalized sales assets for emails without manual work.</p>
                <h6>join Waitlist</h6>
                <div className="email "  >
                    <input type="email" placeholder='my@email.com' />
                    <div className='arrow'></div>
                </div>
                <p className='last'>if you don't get a demo set in the first 10 days money back guarantee</p>
                <img src={laptop} alt='' className='laptop'/>
            </div>
        </div>
    );
}

export default Home;
