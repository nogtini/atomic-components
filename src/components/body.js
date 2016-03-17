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
                            <img className={styles.serviceImage} src={backend} />
                            <h2>Node JS</h2>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut mi ut augue tincidunt facilisis a vel felis. Duis aliquet diam vel quam fermentum cursus.</div>
                        </div>
                        <div className={`${styles.frontend}`}>
                            <img className={styles.serviceImage} src={frontend} />
                            <h2>Front-End</h2>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut mi ut augue tincidunt facilisis a vel felis. Duis aliquet diam vel quam fermentum cursus.</div><p></p>
                        </div>
                        <div className={`${styles.design}`}>
                            <img className={styles.serviceImage} src={design} />
                            <h2>Design</h2>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut mi ut augue tincidunt facilisis a vel felis. Duis aliquet diam vel quam fermentum cursus.</div>
                        </div>
                    </div>
                    <div className={`${styles.trails}`}></div>
                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}