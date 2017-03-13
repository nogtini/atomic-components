const Service = require('trails/service')
const nodemailer = require('nodemailer')
const ReactDOMServer = require('react-dom/server')
const React = require('react')

/**
 * @module ContactService
 * @description TODO document Service
 */
module.exports = class ContactService extends Service {

  /**
   * @param message.from  sender's email address
   * @param message.subject message subject
   * @param message.text  the message body
   */
  email (message, meta) {
    const config = this.app.config.contact
    const EmailTemplate = require('../../dist/components/ecosystems/EmailTemplate')
    const emailTemplateFactory = React.createFactory(EmailTemplate)
    const emailTemplateElement = React.createElement(emailTemplateFactory, Object.assign(message, meta), null)

    const options = {
      from: `${config.email.from} <${config.smtp.user}>`,
      to: config.email.to,
      cc: message.email,
      subject: config.email.subject,
      html: ReactDOMServer.renderToStaticMarkup(emailTemplateElement)
    }

    this.app.log.info('message html', options.html)
    // render message component
    //
    return new Promise((resolve, reject) => {
      this.transport.sendMail(options, (err, info) => {
        if (err) return reject(err)

        this.app.log.info('nodemailer response', info)

        return resolve(info)
      })
    })
  }

  constructor (app) {
    super(app)

    const config = this.app.config.contact

    this.transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.smtp.user,
        pass: config.smtp.password
      }
    })
  }

}

