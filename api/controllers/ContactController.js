'use strict'

const Controller = require('trails/controller')

/**
 * @module ContactController
 * @description Handles Langa Website Contact Form.
 */
module.exports = class ContactController extends Controller {
  contact (request, reply) {
    reply({ status: 200 })
  }
}

