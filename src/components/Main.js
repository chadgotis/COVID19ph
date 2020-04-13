import React, {useEffect, useRef} from 'react';
import '../scss/main.scss';
import {TweenMax, Power3} from 'gsap';

const Main = () => {
    let infect = useRef(null); 
    let active = useRef(null); 
    let recov = useRef(null); 
    let death = useRef(null); 

    useEffect(() => {
        TweenMax.to(infect,1,{yoyo:true,scale: 1.03,repeat: -1,ease: Power3.easeInOut});
        TweenMax.to(active,1,{yoyo:true,scale: 1.03,repeat: -1,ease: Power3.easeInOut});
        TweenMax.to(recov,1,{yoyo:true,scale: 1.03,repeat: -1,ease: Power3.easeInOut});
        TweenMax.to(death,1,{yoyo:true,scale: 1.03,repeat: -1,ease: Power3.easeInOut});
    },[]);

    return(
        <div className="main">

            <div className='circle-container'>
                <h4 className='infected'>Infected</h4>
                    <div ref={el => {infect = el}} className="circle cir-infected">
                        <span className='val'>4,853</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='active'>Active</h4>
                    <div ref={el => {active = el}} className="circle cir-active">
                        <span className='val'>3,253</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='recovered'>Recovered</h4>
                    <div ref={el => {recov = el}} className="circle cir-recovered">
                        <span className='val'>253</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='death'>Death</h4>
                    <div ref={el => {death = el}} className="circle cir-death">
                        <span className='val'>353</span>
                    </div>
            </div>
        </div>
    )
}

export default Main;