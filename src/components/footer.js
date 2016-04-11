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
                        <a className={`${styles.social} fa fa-facebook`} href="//www.facebook.com/langainc" target="_blank"></a>
                        <a className={`${styles.social} fa fa-twitter`} href="//twitter.com/langateam" target="_blank"></a>
                        <img src={logooutline} className={`${styles.logooutline}`}/>
                        <a className={`${styles.social} fa fa-dribbble`} href="//dribbble.com/langateam" target="_blank"></a>
                        <a className={`${styles.social} fa fa-linkedin`} href="//www.linkedin.com/company/langa-inc-" target="_blank"></a>
                    </div>
                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}
