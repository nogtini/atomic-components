import React, { Component } from 'react'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/HomePage.scss'

//assets
import backend from '../../assets/images/backend.svg'
import frontend from '../../assets/images/frontend.svg'
import design from '../../assets/images/design.svg'
//import trailslogo from '../assets/images/trails.svg'
import strings from '../../assets/strings'

const styles = Object.assign({}, localStyles, globalStyles)

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={`${styles.flexMiddle} ${styles.main}`}>
          <h1>
            Succeed with Node.js
          </h1>
          <h2>
            Langa is a software consulting company and a cadre of passionate full-stack developers.
            We partner with clients across the globe to deliver software solutions that
            address their toughest challenges.
          </h2>
          <div className={`${styles.backfrontdesign} ${styles.services}`}>
            <div className={`${styles.backend}`}>
              <img className={styles.serviceImage} src={backend} />
              <h2>Back-End</h2>
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
        <div className={styles.flexLeft} />
      </div>
    )
  }
}
