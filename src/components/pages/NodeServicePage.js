import React, { Component } from 'react'
import ContactSection from '../sections/ContactSection'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/HomePage.scss'

import backend from '../../assets/images/backend.svg'
import frontend from '../../assets/images/frontend.svg'
import design from '../../assets/images/design.svg'

import { pages } from '../../assets/strings'

const styles = Object.assign({}, localStyles, globalStyles)

export default class NodeServicePage extends Component {
  render() {
    const strings = pages.backend
    return (
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
              <img className={styles.serviceImage} />
              <h2>Development</h2>
              <div className={styles.serviceBody}>{strings.nodejs}</div>
            </div>
            <div className={`${styles.frontend}`}>
              <img className={styles.serviceImage} />
              <h2>Consulting</h2>
              <div className={styles.serviceBody}>{strings.architecture}</div>
            </div>
            <div className={`${styles.design}`}>
              <img className={styles.serviceImage} />
              <h2>API Design</h2>
              <div className={styles.serviceBody}>{strings.apis}</div>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    )
  }
}
