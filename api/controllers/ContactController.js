/**
 * @module ContactController
 * @description Handle contact form requests.
 */
module.exports = class ContactController extends Controller {

  email (request, reply) {
    const referrer = request.info.referrer
    const meta = {
      origin: request.info.hostname,
      ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
      referrer
    }

    this.app.services.ContactService.email(request.payload, meta)
      .then(resp => reply.redirect(`${referrer}?state=submitted`))
  }
}
