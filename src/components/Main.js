import React from 'react';
import '../scss/main.scss';
// import {TweenMax, Power3} from 'gsap';

const Main = (props) => {
    // let infect = useRef(null); 
    // let active = useRef(null); 
    // let recov = useRef(null); 
    // let death = useRef(null); 

    // useEffect(() => {
    //     TweenMax.to(infect,1,{yoyo:true,scale: 1.03,repeat: -1,ease: Power3.easeInOut});
    //     TweenMax.to(active,1,{yoyo:true,scale: 1.03,repeat: -1,ease: Power3.easeInOut});
    //     TweenMax.to(recov,1,{yoyo:true,scale: 1.03,repeat: -1,ease: Power3.easeInOut});
    //     TweenMax.to(death,1,{yoyo:true,scale: 1.03,repeat: -1,ease: Power3.easeInOut});
    // },[]);

    if(!props.record.confirmed){
        return '';
    }
    const conf = props.record.confirmed.value;
    const recov = props.record.recovered.value;
    const deth = props.record.deaths.value;
    const a = recov + deth;
    const b = conf - a;
    return(
        <div className="main">
            <div className='circle-container'>
                <h4 className='infected'>Infected</h4>
                    <div className="circle cir-infected">
                        <span className='val'>{props.record.confirmed.value}</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='active'>Active</h4>
                    <div className="circle cir-active">
                        <span className='val'>{b}</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='recovered'>Recovered</h4>
                    <div className="circle cir-recovered">
                        <span className='val'>{props.record.recovered.value}</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='death'>Death</h4>
                    <div className="circle cir-death">
                        <span className='val'>{props.record.deaths.value}</span>
                    </div>
            </div>
        </div>
    )
}

export default Main;