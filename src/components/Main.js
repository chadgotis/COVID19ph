import React from 'react';
import '../scss/main.scss';

const Main = () => {
    return(
        <div className="main">

            <div className='circle-container'>
                <h4 className='infected'>Infected</h4>
                    <div className="circle cir-infected">
                        <span className='val'>4,853</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='active'>Active</h4>
                    <div className="circle cir-active">
                        <span className='val'>3,253</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='recovered'>Recovered</h4>
                    <div className="circle cir-recovered">
                        <span className='val'>253</span>
                    </div>
            </div>

            <div className='circle-container'>
                <h4 className='death'>Death</h4>
                    <div className="circle cir-death">
                        <span className='val'>353</span>
                    </div>
            </div>
        </div>
    )
}

export default Main;