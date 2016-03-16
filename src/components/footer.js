import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/Footer.scss';

const styles = Object.assign({}, localStyles, globalStyles);
export default class Footer extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <div className={styles.flexLeft} />
                <div className={styles.flexMiddle}></div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}