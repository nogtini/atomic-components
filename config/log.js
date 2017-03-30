/**
 * Logging Configuration
 * (app.config.log)
 *
 * @see http://trailsjs.io/doc/config/log
 */

'use strict'

const winston = require('winston')

module.exports = {

  /**
   * Specify the logger to use.
   * @see https://github.com/winstonjs/winston#instantiating-your-own-logger
   *
   * Exposed on app.log
   */
  logger: new winston.Logger({
    level: 'info',
    exitOnError: false,
    transports: [
      new (winston.transports.Console)({
        prettyPrint: true,
        colorize: true
      })
    ]
  })

}
