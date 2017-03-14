import React, { Component } from 'react'

import { sections } from '../../strings'

export default class ContactSection extends Component {

  static get propTypes () {
    return {
      page: React.PropTypes.bool,
    }
  }

  render () {
    console.log('contact state', this.props)

    const strings = sections.contact

    return (
      <div className="Contact">
        <div className="section flexMiddle">
          <h1>{strings.title}</h1>
          <h2>
            {strings.blurb}
          </h2>
          <div className="contactTower">
            <form className="form" action="/contact" method="POST">
              <input placeholder="What's your Email Address?" name="email" type="email" required></input>
              <input placeholder="Message Subject" name="subject"></input>
              <textarea
                name="message"
                placeholder="How can we help?"
                type="text"
                minLength="8"
                maxLength="4096"
                className="projectInfo"
                required >
              </textarea>
              <button type="submit" className="submit">
                <i className="icon-mail" />
                Send
              </button>
            </form>
            <img src="//cdn.langa.io/art/diagrams/tower.svg" className="tower" />
          </div>
          <img src="//cdn.langa.io/art/backgrounds/teamblue-small-png8.png" className="teamimage" />
        </div>
      </div>
    )
  }

  constructor (props) {
    super(props)
    this.state = { }
  }
}
