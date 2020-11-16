import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './ui/NavBar';
import Footer from './ui/Footer';
import Comments from './comments/Comments';
import Landing from './Landing';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <div className='App'>
                    <Switch>
                        <Route path='/comments' component={Comments} />
                        <Route path='/' component={Landing} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        );
    }
}
