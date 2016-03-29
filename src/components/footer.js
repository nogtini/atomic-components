import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/Footer.scss';

//assets
import logooutline from '../assets/images/logooutline.svg';

const styles = Object.assign({}, localStyles, globalStyles);
export default class Footer extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <div className={styles.flexLeft} />
                <div className={`${styles.flexMiddle} main`}>
                    <div className={`${styles.icons}`}>
                        <div className={`${styles.social} fa fa-facebook`} href="#"></div>
                        <div className={`${styles.social} fa fa-twitter`} href="#"></div>
                        <img src={logooutline} className={`${styles.logooutline}`}/>
                        <div className={`${styles.social} fa fa-dribbble`} href="#"></div>
                        <div className={`${styles.social} fa fa-linkedin`} href="#"></div>
                    </div>
                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}