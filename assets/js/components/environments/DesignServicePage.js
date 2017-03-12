import React, { Component } from 'react'
import { ContactSection, FooterSection, HeaderSection } from '../ecosystems'

import { pages } from '../../strings'

export default class DesignServicePage extends Component {
  render() {
    const strings = pages.design

    return (
      <div className="services-design-page">
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
                <img src="http://cdn.langa.io/art/diagrams/services-design-multiplatform.svg" />
                <h2>Multi Platform</h2>
                <div>{strings.multiPlatform}</div>
              </div>
              <div className="frontend">
                <img src="http://cdn.langa.io/art/diagrams/services-design-integration.svg" />
                <h2>Integration</h2>
                <div>{strings.integration}</div>
              </div>
              <div className="design">
                <img src="http://cdn.langa.io/art/diagrams/services-frontend-ux.svg" />
                <h2>User Experience</h2>
                <div>{pages.frontend.design}</div>
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
