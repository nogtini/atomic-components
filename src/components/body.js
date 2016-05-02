import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/body.scss';

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
      <article className={styles.Body}>
        <div className={`${styles.Container} ${styles.main}`}>

          <h1>Services</h1>
          <section className={styles.services}>

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

          </section>

          <section className={`${styles.trails}`}>
            <img src={trailslogo} className={`${styles.trailslogo}`}/>
            <div className={`${styles.trailstext}`}>
              <p>A Modern Web Application Framework for Node.js</p>
              <a href="http://www.trailsjs.io" className={`${styles.button}`}>Learn More</a>
            </div>
          </section>

        </div>
      </article>
    );
  }
}
