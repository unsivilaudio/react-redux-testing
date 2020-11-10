import React, { Component } from 'react';

import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className='App'>
                    <header className='Header'>
                        An App All About React Testing
                    </header>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
