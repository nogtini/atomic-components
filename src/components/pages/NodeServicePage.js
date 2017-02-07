import React, { Component } from 'react'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/HomePage.scss'

import backend from '../../assets/images/backend.svg'
import frontend from '../../assets/images/frontend.svg'
import design from '../../assets/images/design.svg'

import strings from '../../assets/strings'

const styles = Object.assign({}, localStyles, globalStyles)

export default class NodeServicePage extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={`${styles.flexMiddle} ${styles.main}`}>
          <h1>
            The world's leading Node.js Experts
          </h1>
          <h2>
            Looking for Node.js development services?
            We can help. We specialize in Node.js, working directly with clients
            to build scalable, high-performance, enterprise-grade software.
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
              <div className={styles.serviceBody}>{strings.serviceBody.architecture}</div>
            </div>
            <div className={`${styles.design}`}>
              <img className={styles.serviceImage} src={design} />
              <h2>Design</h2>
              <div className={styles.serviceBody}>{strings.serviceBody.apiDesign}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
