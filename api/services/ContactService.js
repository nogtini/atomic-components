const request = require('request-promise')

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
    const { portalId, formId } = config.hubspot
    const formUrl = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${formId}`

    const form = {
      method: 'POST',
      email: message.email,
      subject: message.subject,
      message: message.message,
      ip: meta.ip,
      origin: meta.origin
    }

    this.log.info('ContactService.email', form)

    return request.post(formUrl, { form })
  }
}
