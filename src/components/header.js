import React, { Component } from 'react';

import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/header.scss';

const skyline = '../assets/images/skyline.svg';
const logo = '../assets/images/logomain.svg';

const styles = Object.assign({}, globalStyles, localStyles);

export default class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={`${styles.Container} ${styles.headerContainer}`}>
          <img className={styles.logo} src={logo} />
          <img className={styles.skyline} src={skyline} />
        </div>
      </div>
    )
  }
}
