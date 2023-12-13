import React from 'react';
import "./BookDemos.scss"
import { TypeAnimation } from 'react-type-animation';
import template from "../../images/GIF-1.png"
import right from "../../images/right.png";
import sbar from "../../images/sbar.png";
import buble from "../../images/big-bubeles.png";

const BookDemos = () => {
    return (
        <div className='BookDemos '>
            <div className='TitleDemos'>
                <h1>
                    Personalized
                </h1>
                <h2>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Assets',
                            800, // wait 1s before replacing "Mice" with  "Hamsters"
                            'Gifs',
                            800,
                            'Images',
                            800,
                            'Images',
                            800,
                            'PDFs',
                            800,
                            'Memes',
                            800,
                        ]}
                        wrapper="span"
                        speed={60}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h2>
                <h1>
                    at Scale
                </h1>
            </div>
            <p>Purposeful images that visualize your value proposition to increase demos Scheduled</p>

            <div className='book-demos'>
                <div className='inform-template '>
                    <h1>Book Demos with Email</h1>
                    <p>Create the perfect personalized asset from 100s of template or create your own from scratch -is this the end of cold calling?</p>
                    <ul className='feature'>
                        <li className=''>
                            <img src={right} alt='' />
                            <h6>As soon as your email is opened your asset is soon</h6>
                        </li>
                        <li className=''>
                            <img src={right} alt='' />
                            <h6>Fully customizable assets to appeal to your prospect</h6>
                        </li>
                        <li className=''>
                            <img src={right} alt='' />
                            <h6>Prospects process images 15x faster than words</h6>
                        </li>
                        <li className=''>
                            <img src={right} alt='' />
                            <h6>Captures attention and increases conversion</h6>
                        </li>
                        <li className=''>
                            <img src={right} alt='' />
                            <h6>Put your solution in your prospects hands like never before </h6>
                        </li>
                    </ul>
                </div>
                <div className='gif-template'>
                    <img src={template} alt='' className='temp'/>
                </div>
            </div>
            <img src={sbar} alt='' className='sbar'/>
            <div className='bubles'>
            <img src={buble} alt='' className='buble b-one'/>
            <img src={buble} alt='' className='buble b-two'/>
            <img src={buble} alt='' className='buble b-three'/>
            <img src={buble} alt='' className='buble b-four'/>
            </div>
        </div>
    );
}

export default BookDemos;
