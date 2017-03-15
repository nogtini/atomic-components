import React, { Component } from 'react'

module.exports = class EmailTemplate extends Component {

  static get propTypes () {
    return {
      from: React.PropTypes.string,
      subject: React.PropTypes.string,
      message: React.PropTypes.string,
      ip: React.PropTypes.string,
      referrer: React.PropTypes.string,
      origin: React.PropTypes.string
    }
  }

  render () {
    return (
      <div>
        <h3>Subject</h3>
        {this.props.subject}
        <h3>Message</h3>
        message.text
      </div>
    )
  }

}

