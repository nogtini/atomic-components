import React, { Component } from 'react'
import { ContactSection, FooterSection, HeaderSection } from '../ecosystems'

export default class ContactPage extends Component {

  static get propTypes () {
    return {
      query: React.PropTypes.object
    }
  }

  render () {
    return (
      <div className="contact-page">
        <HeaderSection {...this.props} />
        <ContactSection {...this.props} />
        <FooterSection />
      </div>
    )
  }
}

