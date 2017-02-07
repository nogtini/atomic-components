import React, { Component } from 'react'
import { ContactSection } from '../sections'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/ContactPage.scss'

const styles = Object.assign({}, localStyles, globalStyles)

export default class ContactPage extends Component {
  render () {
    return (
      <div className={styles.Container} >
        <div className={styles.flexLeft} />
        <div className={`${styles.flexMiddle} ${styles.main}`}>
          <ContactSection />
        </div>
        <div className={styles.flexRight} />
      </div>
    )
  }
}

