import React, { Component } from 'react'
import Popover from 'react-popover'

import { sections } from '../../strings'

export default class ContactSection extends Component {

  static get propTypes () {
    return {
      page: React.PropTypes.bool
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      subject: '',
      message: '',
      error: '',
      open: false,
      spinnerClass: 'fa-send',
      sent: false,
      sendText: 'Send'
    }
  }

  validateEmail () {
    const email = this.state.email
    if (!email) {
      this.setState({ open: true, error: 'Please enter your email address so that we can get back in touch with you!' })
    }
    else if (!/^.+@.+\..+$/.test(email)) {
      this.setState({ open: true, error: 'Please make sure your email address is valid. For example: hello@langa.io' })
    }
    else {
      return true
    }
  }

  validateMessage () {
    const message = this.state.message
    if (!message) {
      this.setState({ open: true, error: 'Please enter a message.' })
    }
    else if (message.length < 10) {
      this.setState({ open: true, error: 'Please provide in more detail so that we know how we can help.' })
    }
    else {
      return true
    }
  }

  closePopover () {
    this.setState({ open: false })
  }

  onSubjectChanged (e) {
    this.setState({ subject: e.target.value })
  }

  onEmailChanged (e) {
    this.setState({ email: e.target.value })
  }

  onMessageChanged (e) {
    this.setState({ message: e.target.value })
  }

  submitForm (e) {
    if (this.state.sent && this.state.status === 200) {
      this.setState({ error: 'We received your message, and will get in touch shortly! Thanks.', open: true })
      return
    }
    if (this.state.sent) {
      this.setState({ error: 'We weren\'t able to read your last message. Please email hello@langa.io', open: true })
      return
    }

    if (!this.validateEmail()) return
    if (!this.validateMessage()) return

    this.setState({ spinnerClass: 'fa-spin fa-refresh' })

    const req = new XMLHttpRequest()
    req.open('POST', 'https://api.langa.io/email', true)
    req.setRequestHeader('Content-Type', 'application/json')
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200) {
        const result = JSON.parse(req.responseText)
        if (result.status == 'sent' || result.status == 'queued') {
          this.setState({
            status: req.status,
            sent: true,
            spinnerClass: 'fa-check',
            sendText: 'Sent!'
          })
        }
        else {
          this.setState({
            status: req.status,
            sent: true,
            spinnerClass: 'fa-warning',
            error: 'Sorry, we weren\'t able to read your message. Please email hello@langa.io',
            open: true
          })
        }
      }
      else if (req.readyState === 4 && (req.status === 0 || req.status === 403)) {
        console.log('options fail')
        this.setState({
          error: 'Sorry, we weren\'t able to read your message. Please email hello@langa.io',
          open: true,
          status: req.status,
          sent: true,
          spinnerClass: 'fa-warning'
        })
      }
      else if (req.status > 399) {
        console.log('fail fail')
        console.log('mailer failed', req.status)
        this.setState({
          error: 'Oops! Our emailer is having some problems right now. Please email hello@langa.io',
          open: true,
          status: req.status,
          sent: true,
          spinnerClass: 'fa-warning'
        })
      }
    }
    req.send(JSON.stringify({
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }))
  }

  render () {
    const strings = sections.contact
    const { sendText, spinnerClass, error, open } = this.state

    return (
      <div className="Contact">
        <div className="section flexMiddle">
          <h1>{strings.title}</h1>
          <h2>
            {strings.blurb}
          </h2>
          <div className="contactTower">
            <form className="form">
              <input placeholder="What's your Email Address?" onChange={e => this.onEmailChanged(e)}></input>
              <input placeholder="Message Subject" onChange={e => this.onSubjectChanged(e)}></input>
              <textarea
                placeholder="How can we help?"
                type="text"
                onChange={e => this.onMessageChanged(e)}
                className="projectInfo">
              </textarea>
              <button type="button" className="submit" onClick={e => this.submitForm(e)}>
                <i className={'fa ' + spinnerClass} />
                {sendText}
              </button>
              <Popover
                offset={8}
                enterExitTransitionDurationMs={200}
                refreshIntervalMs={10000}
                className="Popoverbody"
                isOpen={open}
                body={
                  <div>
                    {error}
                  </div>
                }
                onOuterAction={() => this.closePopover()}
                place="below">
                  <div className="target" onClick={() => this.closePopover()}>
                  </div>
              </Popover>
            </form>
            <img src="//cdn.langa.io/art/diagrams/tower.svg" className="tower" />
          </div>
          <img src="//cdn.langa.io/art/backgrounds/teamblue-small-png8.png" className="teamimage" />
        </div>
      </div>
    )
  }
}
