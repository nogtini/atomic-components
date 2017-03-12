import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="summary flexMiddie">
          <div className="siteMap">

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/opensource">Open Source</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>

            <ul>
              <li><a href="/services/node-js-development">Backend</a></li>
              <li><a href="/services/front-end-development">Frontend</a></li>
              <li><a href="/services/design">Design</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <h2><i className={'icon-mail'} /><a href="mailto:hello@langa.io">hello@langa.io</a></h2>
            <h2><i className={'icon-phone'} /><a href="tel:+17578287656">(757) 828-7656</a></h2>
          </div>
        </div>

        <div className="icons">
          <a title="Langa on Facebook" href="//www.facebook.com/langainc" target="_blank"><i className="icon-facebook"/></a>
          <a title="Langa on Twitter" className="social twitter icon-twitter" href="//twitter.com/langateam" target="_blank"></a>
          <a title="Langa on Github" className="social github icon-github" href="//github.com/langateam" target="_blank"></a>
          <a title="Langa on Linkedin" className="social linkedin icon-linkedin" href="//www.linkedin.com/company/langa-inc-" target="_blank"></a>
          <a title="Langa on Medium" className="social medium icon-medium" href="//www.medium.com/language-arts" target="_blank"></a>
          <a title="Langa on Google Maps" className="social maps icon-location" href="https://www.google.com/maps/place/Langa" target="_blank"></a>
        </div>

      </div>
    )
  }
}
