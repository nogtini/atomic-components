import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">

        <div className="Container">
          <div className="summary flexMiddie">
            <div className="siteMap">

              <ul>
                <li><a to="/">Home</a></li>
                <li><a to="/opensource">Open Source</a></li>
                <li><a to="/contact">Contact Us</a></li>
              </ul>

              <ul>
                <li><a to="/services/node-js-development">Backend</a></li>
                <li><a to="/services/front-end-development">Frontend</a></li>
                <li><a to="/services/design">Design</a></li>
              </ul>
            </div>
            <div className="contact-info">
              <h2><i className={'fa fa-envelope'} /><a href="mailto:hello@langa.io">hello@langa.io</a></h2>
              <h2><i className={'fa fa-phone'} /><a href="tel:+17578287656">(757) 828-7656</a></h2>
            </div>
          </div>
        </div>

        <div className="Container">
          <div className="icons">
            <a title="Langa on Facebook" className="social facebook fa fa-facebook" href="//www.facebook.com/langainc" target="_blank"></a>
            <a title="Langa on Twitter" className="social twitter fa fa-twitter" href="//twitter.com/langateam" target="_blank"></a>
            <a title="Langa on Github" className="social github fa fa-github-alt" href="//github.com/langateam" target="_blank"></a>
            <a title="Langa on Linkedin" className="social linkedin fa fa-linkedin" href="//www.linkedin.com/company/langa-inc-" target="_blank"></a>
            <a title="Langa on Medium" className="social medium fa fa-medium" href="//www.medium.com/language-arts" target="_blank"></a>
            <a title="Langa on Google Maps" className="social maps fa fa-map-marker" href="https://www.google.com/maps/place/Langa" target="_blank"></a>
          </div>
        </div>

      </div>
    )
  }
}
