import React, { Component } from 'react'
import { ContactSection, FooterSection, HeaderSection } from '../ecosystems'

import { pages } from '../../strings'

export default class FrontendServicePage extends Component {
  render() {
    const strings = pages.frontend

    return (
      <div className="services-frontend-page">
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
              <div className="backend">
                <img src="http://cdn.langa.io/art/diagrams/services-frontend-approach.svg" />
                <h2>Unique Approach</h2>
                <div>{strings.approach}</div>
              </div>
              <div className="frontend">
                <img src="http://cdn.langa.io/art/diagrams/services-frontend-moderntools.svg" />
                <h2>Modern Tools</h2>
                <div>{strings.react}</div>
              </div>
              <div className="design">
                <img src="http://cdn.langa.io/art/diagrams/services-frontend-ux.svg" />
                <h2>Graphic and UX Design</h2>
                <div>{strings.design}</div>
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
