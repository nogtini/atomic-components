import React, { Component } from 'react'
import { ContactSection, FooterSection, HeaderSection } from '../ecosystems'

import { pages } from '../../strings'

export default class NodeServicePage extends Component {
  render() {
    const strings = pages.backend

    return (
      <div className="services-backend-page">
        <HeaderSection />
        <div className="Container">
          <div className="section">
            <h1>
              {strings.title}
            </h1>
            <h2>
              {strings.blurb}
            </h2>
            <div className="backfrontdesign services">
              <div className="backend">
                <img src="http://cdn.langa.io/art/diagrams/services-backend-dev.svg" />
                <h2>Development</h2>
                <div>{strings.nodejs}</div>
              </div>
              <div className="frontend">
                <img src="http://cdn.langa.io/art/diagrams/services-backend-architecture.svg" />
                <h2>Architecture</h2>
                <div>{strings.architecture}</div>
              </div>
              <div className="design">
                <img src="http://cdn.langa.io/art/diagrams/services-backend-apis.svg" />
                <h2>API Design</h2>
                <div>{strings.apis}</div>
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
