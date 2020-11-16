import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const NavBar = props => {
    const { authenticated } = props;

    return (
        <nav className='NavBar'>
            <div className='Container'>
                <Link to='/' className='Branding'>
                    React Simple Starter
                </Link>
                <ul className='List'>
                    <NavLink to='/comments' className='ListItem'>
                        Feedback
                    </NavLink>
                    <NavLink to='/resources' className='ListItem'>
                        Resources
                    </NavLink>
                    <NavLink
                        to={authenticated ? '/logout' : '/login'}
                        className='ListItem'>
                        {authenticated ? 'Logout' : 'Login'}
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ authenticated }) => {
    return { authenticated };
};

export default connect(mapStateToProps)(NavBar);
