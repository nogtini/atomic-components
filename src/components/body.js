import React, { Component } from 'react';

import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/body.scss';

const backend = '../assets/images/backend.svg';
const frontend = '../assets/images/frontend.svg';
const design = '../assets/images/design.svg';
const trailslogo = '../assets/images/trails.svg';
import strings from '../assets/strings';

const styles = Object.assign({}, globalStyles, localStyles);

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
