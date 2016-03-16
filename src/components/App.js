import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Contact from './Contact';
import Footer from './Footer';
import styles from './styles/App.scss';

export default class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <Header />
                <Body />
                <Contact />
                <Footer />
            </div>
        );
    }
}