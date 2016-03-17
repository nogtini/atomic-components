import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/Body.scss';

//assets
import backend from '../assets/images/backend.svg';
import frontend from '../assets/images/frontend.svg';
import design from '../assets/images/design.svg';

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
                            <img className={styles.backendimage} src={backend} />
                        </div>
                        <div className={`${styles.frontend}`}>
                            <img className={styles.frontendimage} src={frontend} />
                        </div>
                        <div className={`${styles.design}`}>
                            <img className={styles.designimage} src={design} />
                        </div>
                    </div>
                    <div className={`${styles.trails}`}></div>
                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}