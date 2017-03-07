import React, { Component } from 'react'
import ContactSection from '../sections/ContactSection'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/HomePage.scss'

//assets
import backend from '../../assets/images/backend.svg'
import frontend from '../../assets/images/frontend.svg'
import design from '../../assets/images/design.svg'
//import trailslogo from '../assets/images/trails.svg'
import { pages } from '../../assets/strings'

const styles = Object.assign({}, localStyles, globalStyles)

export default class HomePage extends Component {
  render() {
    const strings = pages.home

    return (
      <div>
        <div className={styles.Container}>
          <div className={`${styles.flexMiddle} ${styles.main}`}>
            <h1>
              {strings.title}
            </h1>
            <h2>
              {strings.blurb}
            </h2>
            <div className={`${styles.backfrontdesign} ${styles.services}`}>
              <div className={`${styles.backend}`}>
                <img className={styles.serviceImage} src={backend} />
                <h2><a href="/services/node-js-development">Back-End</a></h2>
                <div className={styles.serviceBody}>{strings.services.nodejs}</div>
              </div>
              <div className={`${styles.frontend}`}>
                <img className={styles.serviceImage} src={frontend} />
                <a href="/services/front-end-development">
                  <h2>Front-End</h2>
                </a>
                <div className={styles.serviceBody}>{strings.services.frontend}</div>k
              </div>
              <div className={`${styles.design}`}>
                <img className={styles.serviceImage} src={design} />
                <a href="/services/design">
                  <h2>Design</h2>
                </a>
                <div className={styles.serviceBody}>{strings.services.design}</div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />

          {/*
          <div className={`${styles.trails}`}>
            <img src={trailslogo} className={`${styles.trailslogo}`}/>
            <div className={`${styles.trailstext}`}>
              <a title="Check out Trails.js on Github" href="http://www.trailsjs.io" className={`${styles.checkitout}`}>Learn More</a>
              <div className={`${styles.body}`}>A Modern Web Application Framework for Node.js</div>
            </div>
          </div>
          */}
      </div>
    )
  }
}
