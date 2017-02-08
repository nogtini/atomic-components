import React, { Component } from 'react'
import { Link } from 'react-router'
import globalStyles from '../styles/global.scss'
import localStyles from './styles/HeaderSection.scss'

//assets
import skyline from '../../assets/images/skyline.svg'
import logo from '../../assets/images/logomain.svg'

const styles = Object.assign({}, localStyles, globalStyles)

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>

        <div className={styles.navbar}>
          <Link className={styles.navlink} to="/">Home</Link>
          <Link className={styles.navlink} to="/services/node-js-development">Backend</Link>
          <Link className={styles.navlink} to="/services/front-end-development">Frontend</Link>
          <Link className={styles.navlink} to="/services/design">Design</Link>
          <Link className={styles.navlink} to="/opensource">Open Source</Link>
          <Link className={styles.navlink} to="/contact">Contact Us</Link>
        </div>

        <div className={styles.banner}>
          <div className={styles.flexLeft} />
          <div className={`${styles.flexMiddle} ${styles.mainContent}`}>
            <img className={styles.logo} src={logo} />
            <img className={styles.skyline} src={skyline} />
          </div>
          <div className={styles.flexRight} />
        </div>

      </div>
    )
  }
}
