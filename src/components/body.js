import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/Body.scss';

const styles = Object.assign({}, localStyles, globalStyles);
export default class Body extends Component {
    render() {
        return (
            <div className={styles.Body}>
                <div className={styles.flexLeft} />
                <div className={`${styles.flexMiddle} ${styles.main}`}>
                    <h1>Services</h1>
                    <div classNames={`${styles.backfrontdesign}`}></div>
                    <div classNames={`${styles.trails}`}></div>
                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}