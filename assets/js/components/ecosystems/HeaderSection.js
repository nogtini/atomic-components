import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header">

        <div className="navbar">
          <a className="navlink" href="/">Home</a>
          <a className="navlink" href="/services/node-js-development">Backend</a>
          <a className="navlink" href="/services/front-end-development">Frontend</a>
          <a className="navlink" href="/services/design">Design</a>
          <a className="navlink" href="/opensource">Open Source</a>
          <a className="navlink" href="/contact">Contact Us</a>
        </div>

        <div className="banner">
          <div className="flexLeft" />
          <div className="flexMiddle mainContent">
            <img className="logo" src="//cdn.langa.io/art/logos/logomain.svg" />
            <img className="skyline" src="//cdn.langa.io/art/backgrounds/skyline.svg" />
          </div>
          <div className="flexRight" />
        </div>
      </div>
    )
  }
}
