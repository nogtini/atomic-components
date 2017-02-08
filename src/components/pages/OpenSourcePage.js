import React, { Component } from 'react'
import ContactSection from '../sections/ContactSection'
import globalStyles from '../styles/global.scss'
import homeStyles from './styles/HomePage.scss'
import localStyles from './styles/OpenSourcePage.scss'

import trailsLogo from '../../assets/images/trailslogo.svg'
import sailsLogo from '../../assets/images/sails-logo.svg'
import langaLogo from '../../assets/images/langaoss.png'
import nodeLogo from '../../assets/images/nodelogo.png'
import norfolkjsLogo from '../../assets/images/norfolkjslogo.jpg'

import { pages } from '../../assets/strings'

const styles = Object.assign({ }, localStyles, homeStyles, globalStyles)

export default class OpenSourcePage extends Component {
  render() {
    const strings = pages.openSource

    return (
      <div>
        <div className={styles.Container}>
          <a
              className={`${styles.ribbon} github-fork-ribbon left-top`}
              href="https://github.com/langateam/langa.io"
              target="_blank"
              title="Fork me on GitHub">
            Fork me on GitHub
          </a>
          <div className={`${styles.flexMiddle} ${styles.main}`}>
            <h1>
              {strings.title}
            </h1>
            <h2>
              {strings.blurb}
            </h2>

            <h1>
              Featured Projects
            </h1>
            <h2>
              Langa offers both free and paid support for each of our open-source projects.
            </h2>
            <div className={styles.showcase}>
              <div className={styles.showcaseItem}>
                <a href="https://github.com/trailsjs" target="_blank">
                  <img src={trailsLogo} />
                  <h2>Trails</h2>
                </a>
                <div className={styles.serviceBody}>{strings.featured.trails}</div>
              </div>
              <div className={styles.showcaseItem}>
                <a href="https://github.com/waterlinejs" target="_blank">
                  <img src={sailsLogo} />
                  <h2>Sails + Waterline</h2>
                </a>
                <div className={styles.serviceBody}>{strings.featured.sails}</div>
              </div>
              <div className={styles.showcaseItem}>
                <a href="https://github.com/langateam" target="_blank">
                  <img src={langaLogo} />
                  <h2>Langa Projects</h2>
                </a>
                <div className={styles.serviceBody}>{strings.featured.misc}</div>
              </div>
            </div>
            <h1>
              Events and Sponsorship
            </h1>
            <h2>
              {strings.events.blurb}
            </h2>
            <div className={styles.events}>
              <div className={styles.eventItem}>
                <a href="http://events.linuxfoundation.org/events/node-interactive" target="_blank">
                  <img src={nodeLogo} />
                  <h2>Node Interactive 2016</h2>
                </a>
                <div className={styles.serviceBody}>{strings.events.conf}</div>
              </div>
              <div className={styles.eventItem}>
                <a href="https://meetup.com/norfolkjs" target="_blank">
                  <img src={norfolkjsLogo} />
                  <h2>Norfolk.js Meetup</h2>
                </a>
                <div className={styles.serviceBody}>{strings.events.meetup}</div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    )
  }
}

