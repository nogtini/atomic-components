'use strict'

const Controller = require('trails/controller')

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Trails app
 * @see {@link http://trailsjs.io/doc/api/controllers}
 * @this TrailsApp
 */
module.exports = class DefaultController extends Controller {

  /**
   * Return some info about this application
   */
  info (request, reply) {
    reply(this.app.services.DefaultService.getApplicationInfo())
  }
}
