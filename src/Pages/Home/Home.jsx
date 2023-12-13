import React from 'react';
// import wave from "../../images/wave.png"
import laptop from "../../images/labtop.png"
import "./Home.scss";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className='home'>
            <div className='inform'>
                <h1>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Create Personalized Assets',
                            1200, // wait 1s before replacing "Mice" with  "Hamsters"
                            'Create Personalized Gifs',
                            1200,
                            'Create Personalized Images',
                            1200,
                            'Create Personalized Memes',
                            1200
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <h1>for You Prospecting Emails Fast</h1>
                <p>Whale Hunter is the Al Sales Prospecting tool that help quickly create</p>
                <p>Personalized sales assets for emails without manual work.</p>
                <h6>join Waitlist</h6>
                <div className="email "  >
                    <input type="email" placeholder='my@email.com' />
                    <div className='arrow'></div>
                </div>
                <p className='last'>if you don't get a demo set in the first 10 days money back guarantee</p>
                <img src={laptop} alt='' className='laptop' />
            </div>
        </div>
    );
}

export default Home;
