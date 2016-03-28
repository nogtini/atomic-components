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
                        <a className="fa fa-facebook social" href="#"></a>
                        <a className="fa fa-twitter social" href="#"></a>
                        <img src={logooutline} className={`${styles.logooutline}`}/>
                        <a className="fa fa-dribbble" href="#"></a>
                        <a className="fa fa-linkedin" href="#"></a>
                    </div>
                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}