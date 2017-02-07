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
                <li>Home</li>
                <li>Open Source</li>
                <li>Contact Us</li>
                <li>About Langa</li>
              </ul>

              <ul>
                <li>Backend</li>
                <li>Frontend</li>
                <li>Design</li>
              </ul>
            </div>
            <div className={styles.contactInfo}>
              <h2>hello@langa.io</h2>
              <h2>(757) 828-7656</h2>
            </div>
          </div>
        </div>

        <div className={styles.Container}>
          <div className={styles.icons}>
            <a title="Langa on Facebook" className={`${styles.social} fa fa-facebook`} href="//www.facebook.com/langainc" target="_blank"></a>
            <a title="Langa on Twitter" className={`${styles.social} fa fa-twitter`} href="//twitter.com/langateam" target="_blank"></a>
            <a title="Langa on Github" className={`${styles.social} fa fa-github-alt`} href="//github.com/langateam" target="_blank"></a>
            <a title="Langa on Linkedin" className={`${styles.social} fa fa-linkedin`} href="//www.linkedin.com/company/langa-inc-" target="_blank"></a>
            <a title="Langa on Medium" className={`${styles.social} fa fa-medium`} href="//www.medium.com/language-arts" target="_blank"></a>
          </div>
        </div>

      </div>
    )
  }
}
