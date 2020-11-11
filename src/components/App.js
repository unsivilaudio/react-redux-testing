import React, { Component } from 'react';

import NavBar from './ui/NavBar';
import Footer from './ui/Footer';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className='App'>
                    <div className='Hero'>
                        <header className='Hero__Header'>
                            An App All About React Testing
                        </header>
                        <p className='Hero__SubText'>
                            It's a real good time, trust me....
                        </p>
                    </div>
                    <CommentBox />
                    <CommentList comments={[]} />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
