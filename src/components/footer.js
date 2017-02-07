import React, { Component } from 'react'
import globalStyles from '../assets/styles/globals.scss'
import localStyles from './styles/footer.scss'
import logooutline from '../assets/images/logooutline.svg'

const styles = Object.assign({}, localStyles, globalStyles)

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.Footer}>
        <div className={`${styles.Container} ${styles.icons}`}>
          <a title="Langa on Facebook" className={`${styles.social} fa fa-facebook`} href="//www.facebook.com/langainc" target="_blank"></a>
          <a title="Langa on Twitter" className={`${styles.social} fa fa-twitter`} href="//twitter.com/langateam" target="_blank"></a>
          <a title="Langa on Github" className={`${styles.social} fa fa-github-alt`} href="//github.com/langateam" target="_blank"></a>
          <a title="Langa on Linkedin" className={`${styles.social} fa fa-linkedin`} href="//www.linkedin.com/company/langa-inc-" target="_blank"></a>
        </div>
      </div>
    )
  }
}
