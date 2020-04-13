import React from 'react';
import '../scss/hero.scss';
import vir1 from '../assets/virus1.png';
import vir2 from '../assets/virus2.png';

const Hero = () => {
    return(
        <div className="hero-container">
            <div className="hash">
                <h1>STAYHOME</h1>
                <h1>#YOUSAVELIVES</h1>
            </div>
            <div className="date">
                <h3>Updated:</h3>
                <h3>April 13, 2020</h3>
                <h3>7:15pm</h3>
            </div>
            <div className="viruses">
                <img src={vir1} alt="virus"/>
                <img src={vir2} alt="virus"/>
            </div>
        </div>
    )
}

export default Hero;