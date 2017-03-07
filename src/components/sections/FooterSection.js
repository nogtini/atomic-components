import React, { Component } from 'react'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/FooterSection.scss'

const styles = Object.assign({}, localStyles, globalStyles)

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.Footer}>

        <div className={styles.Container}>
          <div className={`${styles.summary} ${styles.flexMiddle}`}>
            <div className={styles.siteMap}>

              <ul>
                <li><a to="/">Home</a></li>
                <li><a to="/opensource">Open Source</a></li>
                <li><a to="/contact">Contact Us</a></li>
              </ul>

              <ul>
                <li><a to="/services/node-js-development">Backend</a></li>
                <li><a to="/services/front-end-development">Frontend</a></li>
                <li><a to="/services/design">Design</a></li>
              </ul>
            </div>
            <div className={styles.contactInfo}>
              <h2><i className={'fa fa-envelope'} /><a href="mailto:hello@langa.io">hello@langa.io</a></h2>
              <h2><i className={'fa fa-phone'} /><a href="tel:+17578287656">(757) 828-7656</a></h2>
            </div>
          </div>
        </div>

        <div className={styles.Container}>
          <div className={styles.icons}>
            <a title="Langa on Facebook" className={`${styles.social} ${styles.facebook} fa fa-facebook`} href="//www.facebook.com/langainc" target="_blank"></a>
            <a title="Langa on Twitter" className={`${styles.social} ${styles.twitter} fa fa-twitter`} href="//twitter.com/langateam" target="_blank"></a>
            <a title="Langa on Github" className={`${styles.social} ${styles.github} fa fa-github-alt`} href="//github.com/langateam" target="_blank"></a>
            <a title="Langa on Linkedin" className={`${styles.social} ${styles.linkedin} fa fa-linkedin`} href="//www.linkedin.com/company/langa-inc-" target="_blank"></a>
            <a title="Langa on Medium" className={`${styles.social} ${styles.medium} fa fa-medium`} href="//www.medium.com/language-arts" target="_blank"></a>
            <a title="Langa on Google Maps" className={`${styles.social} ${styles.maps} fa fa-map-marker`} href="https://www.google.com/maps/place/Langa" target="_blank"></a>
          </div>
        </div>

      </div>
    )
  }
}
