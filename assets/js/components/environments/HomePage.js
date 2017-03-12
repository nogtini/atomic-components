import React, { Component } from 'react'
import { ContactSection, FooterSection, HeaderSection } from '../ecosystems'

import { pages } from '../../strings'

export default class HomePage extends Component {
  render() {
    const strings = pages.home

    return (
      <div className="home-page">
        <HeaderSection />
        <div className="section">
          <div className="Container">
            <h1>
              {strings.title}
            </h1>
            <h2>
              {strings.blurb}
            </h2>
            <div className="backfrontdesign services">
              <div className="backend" >
                <img src="//cdn.langa.io/art/diagrams/backend.svg" />
                <h2><a href="/services/node-js-development">Back-End</a></h2>
                <div>{strings.services.nodejs}</div>
              </div>
              <div className="frontend">
                <img src="//cdn.langa.io/art/diagrams/frontend.svg" />
                <a href="/services/front-end-development">
                  <h2>Front-End</h2>
                </a>
                <div>{strings.services.frontend}</div>
              </div>
              <div className="design">
                <img src="//cdn.langa.io/art/diagrams/design.svg" />
                <a href="/services/design">
                  <h2>Design</h2>
                </a>
                <div>{strings.services.design}</div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
        <FooterSection />
      </div>
    )
  }
}
