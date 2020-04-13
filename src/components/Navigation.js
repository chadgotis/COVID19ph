import React from 'react';
import '../scss/navigation.scss';

const Navigation = () => {
    return(
        <div className="navigation">
            <ul>
                <li className='logo'>Bantay Covid</li>
                <li className='links'><a href='/'>Git</a></li>
            </ul>
        </div>
    )
}

export default Navigation;