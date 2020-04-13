import React,{useRef} from 'react';
import '../scss/circle.scss';

const Circle = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
    let infect = useRef(null); 
    let active = useRef(null); 
    let recov = useRef(null); 
    let death = useRef(null); 

    if(!confirmed){
       return 'Loading...'     
    }
    return(
        <div className='content'>
                        <div className='circle-container'>
                <h4 className='infected'>Infected</h4>
                    <div ref={el => {infect = el}} className="circle cir-infected">
                         <span className='val'>123</span>
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

export default Circle;