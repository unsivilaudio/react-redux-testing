import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = props => {
    return (
        <nav className='NavBar'>
            <div className='Container'>
                <Link to='/' className='Branding'>
                    React Simple Starter
                </Link>
                <ul className='List'>
                    <NavLink to='/' className='ListItem'>
                        Home
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
