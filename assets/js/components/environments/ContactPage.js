import React, { Component } from 'react'
import { ContactSection, FooterSection, HeaderSection } from '../ecosystems'

export default class ContactPage extends Component {
  render () {
    return (
      <div className="contact-page">
        <HeaderSection />
        <ContactSection />
        <FooterSection />
      </div>
    )
  }
}

