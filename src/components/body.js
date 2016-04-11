import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/Body.scss';

//assets
import backend from '../assets/images/backend.svg';
import frontend from '../assets/images/frontend.svg';
import design from '../assets/images/design.svg';
import trailslogo from '../assets/images/trails.svg';
import strings from '../assets/strings';

const styles = Object.assign({}, localStyles, globalStyles);

export default class Body extends Component {
    render() {
        return (
            <div className={styles.Body}>
                <div className={styles.flexLeft} />
                <div className={`${styles.flexMiddle} ${styles.main}`}>
                    <h1>Services</h1>
                    <div className={`${styles.backfrontdesign}`}>
                        <div className={`${styles.backend}`}>
                            <img className={styles.serviceImage} src={backend} />
                            <h2>Node JS</h2>
                            <div className={styles.serviceBody}>{strings.serviceBody.nodejs}</div>
                        </div>
                        <div className={`${styles.frontend}`}>
                            <img className={styles.serviceImage} src={frontend} />
                            <h2>Front-End</h2>
                            <div className={styles.serviceBody}>{strings.serviceBody.frontend}</div>
                        </div>
                        <div className={`${styles.design}`}>
                            <img className={styles.serviceImage} src={design} />
                            <h2>Design</h2>
                            <div className={styles.serviceBody}>{strings.serviceBody.design}</div>
                        </div>
                    </div>
                    <div className={`${styles.trails}`}>
                        <img src={trailslogo} className={`${styles.trailslogo}`}/>
                        <div className={`${styles.trailstext}`}>
                            <a href="http://www.trailsjs.io" className={`${styles.checkitout}`}>Check Out</a>
                            <div className={`${styles.body}`}>Our Modern Web Application Framework for Node.JS</div>
                        </div>
                    </div>
                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}
