import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/Header.scss';

const styles = Object.assign({}, localStyles, globalStyles);

export default class Header extends Component {
    render() {
        return (
            <div className={styles.Header}>
                <div className={styles.flexLeft} />
                <div className={styles.flexMiddle}></div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}