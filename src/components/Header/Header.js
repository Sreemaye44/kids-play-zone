import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon className='icon'
              icon={faGamepad} ></FontAwesomeIcon>
            <h2 className='title'>Kids Play Zone</h2>
        </div>
    );
};

export default Header;