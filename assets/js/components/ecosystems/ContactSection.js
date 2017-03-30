import React, { Component } from 'react'

import { sections } from '../../strings'

export default class ContactSection extends Component {

  static get propTypes () {
    return {
      page: React.PropTypes.bool,
      query: React.PropTypes.object
    }
  }

  render () {
    const submitted = this.props.query.state === 'submitted'

    const strings = sections.contact

    return (
      <div className="Contact">
          <h1>{strings.title}</h1>
          <h2 className="blurb">
            {strings.blurb}
          </h2>
          <div className="section">
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
                <button type="submit" className="submit" disabled={submitted}>
                  <i className="icon-mail" />
                  {submitted ? 'Talk to you soon!' : 'Send'}
                </button>
              </form>
              <img src="//cdn.langa.io/art/diagrams/tower.svg" className="tower" />
            </div>
          </div>

          <img
            id="teamImage"
            src="//cdn.langa.io/art/backgrounds/teamblue-small-png8.png" className="teamimage" />
      </div>
    )
  }

  constructor (props) {
    super(props)
    this.state = { }
  }
}
