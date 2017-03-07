import React, { Component } from 'react'
import ContactSection from '../sections/ContactSection'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/HomePage.scss'

import { pages } from '../../assets/strings'

const styles = Object.assign({}, localStyles, globalStyles)

export default class FrontendServicePage extends Component {
  render() {
    const strings = pages.frontend
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
              <img src="http://cdn.langa.io/art/diagrams/services-frontend-approach.svg" className={styles.serviceImage} />
              <h2>Unique Approach</h2>
              <div className={styles.serviceBody}>{strings.approach}</div>
            </div>
            <div className={`${styles.frontend}`}>
              <img src="http://cdn.langa.io/art/diagrams/services-frontend-moderntools.svg" className={styles.serviceImage} />
              <h2>Modern Tools</h2>
              <div className={styles.serviceBody}>{strings.react}</div>
            </div>
            <div className={`${styles.design}`}>
              <img src="http://cdn.langa.io/art/diagrams/services-frontend-ux.svg" className={styles.serviceImage} />
              <h2>Graphic and UX Design</h2>
              <div className={styles.serviceBody}>{strings.design}</div>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    )
  }
}
