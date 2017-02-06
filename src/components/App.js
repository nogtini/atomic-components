import React, { Component } from 'react'
import Header from './header'
import Body from './body'
import Contact from './contact'
import Footer from './footer'
import styles from './styles/App.scss'

export default class App extends Component {
  render() {
    return (
            <div className={styles.App}>
                <Header />
                <Body />
                <Contact />
                <Footer />
            </div>
    )
  }
}
