const assert = require('assert')

describe('ContactService', () => {
  let ContactService
  before(() => {
    ContactService = global.app.services.ContactService
  })

  describe('#email', () => {
    it('should email with no error', () => {
      const message = {
        email: 'hello+test@langa.io',
        message: 'this is a test message!',
        subject: 'this is a test subject'
      }
      const meta = {
        ip: '0.0.0.0',
        origin: 'mocha',
        referrer: 'mocha'
      }
      return ContactService.email(message, meta)
        .then(resp => {
          assert(true)
        })
    })
  })
})
