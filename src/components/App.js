import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Contact from './Contact';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <Contact />
                <Footer />
            </div>
        );
    }
}