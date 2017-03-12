import React, { Component } from 'react'
import { ContactSection, FooterSection, HeaderSection } from '../ecosystems'

import { pages } from '../../strings'

export default class OpenSourcePage extends Component {
  render() {
    const strings = pages.openSource

    return (
      <div className="opensource-page">
        <HeaderSection />
        <div className="Container">
          <a
              className="ribbon github-fork-ribbon left-top"
              href="https://github.com/langateam/langa.io"
              target="_blank"
              title="Fork me on GitHub">
            Fork me on GitHub
          </a>
          <div className="section">
            <h1>
              {strings.title}
            </h1>
            <h2>
              {strings.blurb}
            </h2>

            <h1>
              Featured Projects
            </h1>
            <h2>
              Langa offers both free and paid support for each of our open-source projects.
            </h2>
            <div className="showcase">
              <div className="showcaseItem">
                <a href="https://github.com/trailsjs" target="_blank">
                  <img src="//cdn.trailsjs.io/art/icons/trails-icon-green.svg" />
                  <h2>Trails</h2>
                </a>
                <div>{strings.featured.trails}</div>
              </div>
              <div className="showcaseItem">
                <a href="https://github.com/waterlinejs" target="_blank">
                  <img src="//cdn.langa.io/art/logos/sails-logo.svg" />
                  <h2>Sails + Waterline</h2>
                </a>
                <div>{strings.featured.sails}</div>
              </div>
              <div className="showcaseItem">
                <a href="https://github.com/langateam" target="_blank">
                  <img src="//cdn.langa.io/art/logos/langaoss.png" />
                  <h2>Langa Projects</h2>
                </a>
                <div className={strings.featured.misc}></div>
              </div>
            </div>
            <h1>
              Events and Sponsorship
            </h1>
            <h2>
              {strings.events.blurb}
            </h2>
            <div className="events">
              <div className="eventItem">
                <a href="http://events.linuxfoundation.org/events/node-interactive" target="_blank">
                  <img src="//cdn.langa.io/art/logos/nodelogo.png" />
                  <h2>Node Interactive 2016</h2>
                </a>
                <div>{strings.events.conf}</div>
              </div>
              <div className="eventItem">
                <a href="https://meetup.com/norfolkjs" target="_blank">
                  <img src="//cdn.langa.io/art/logos/norfolkjslogo.jpg" />
                  <h2>Norfolk.js Meetup</h2>
                </a>
                <div>{strings.events.meetup}</div>
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

