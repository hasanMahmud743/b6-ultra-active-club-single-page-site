import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


import './Header.css';

const Header = () => {
    return (
        <div className='header-title'>
            <FontAwesomeIcon className='fontIcon' size='2x' icon={faDumbbell}></FontAwesomeIcon>
            <h1 >Fitness is Attitute</h1>
            
        </div>
    );
};

export default Header;