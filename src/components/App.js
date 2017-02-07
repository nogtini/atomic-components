import React, { Component } from 'react'
import { FooterSection, HeaderSection } from './sections'
import styles from './styles/App.scss'

export default class App extends Component {

  static get propTypes () {
    return {
      children: React.PropTypes.any
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <HeaderSection />
        {this.props.children}
        <FooterSection />
      </div>
    )
  }
}
