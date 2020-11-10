import React from 'react';

const NavBar = props => {
    return (
        <nav className='NavBar'>
            <div className='Container'>
                <div className='Branding'>React Simple Starter</div>
                <ul className='List'>
                    <li className='ListItem'>Home</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
