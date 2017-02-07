import React, { Component } from 'react'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/HomePage.scss'

const styles = Object.assign({}, localStyles, globalStyles)

export default class NodeServicePage extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={`${styles.flexMiddle} ${styles.main}`}>
        </div>
      </div>
    )
  }
}
