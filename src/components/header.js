import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/Header.scss';

//assets
import skyline from '../assets/images/skyline.svg';
import logo from '../assets/images/logomain.svg';

const styles = Object.assign({}, localStyles, globalStyles);

export default class Header extends Component {
    render() {
        return (
            <div className={styles.Header}>
                <div className={styles.flexLeft} />
                <div className={`${styles.flexMiddle} ${styles.mainContent}`}>
                    <img className={styles.logo} src={logo} />
                    <img className={styles.skyline} src={skyline} />
                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}