import React, { Component } from 'react'
import ContactSection from '../sections/ContactSection'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/HomePage.scss'

import { pages } from '../../assets/strings'

const styles = Object.assign({}, localStyles, globalStyles)

export default class DesignServicePage extends Component {
  render() {
    const strings = pages.design
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
              <img src="http://cdn.langa.io/art/diagrams/services-design-multiplatform.svg" className={styles.serviceImage} />
              <h2>Multi Platform</h2>
              <div className={styles.serviceBody}>{strings.multiPlatform}</div>
            </div>
            <div className={`${styles.frontend}`}>
              <img src="http://cdn.langa.io/art/diagrams/services-design-integration.svg" className={styles.serviceImage} />
              <h2>Integration</h2>
              <div className={styles.serviceBody}>{strings.integration}</div>
            </div>
            <div className={`${styles.design}`}>
              <img src="http://cdn.langa.io/art/diagrams/services-frontend-ux.svg" className={styles.serviceImage} />
              <h2>User Experience</h2>
              <div className={styles.serviceBody}>{pages.frontend.design}</div>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    )
  }
}

