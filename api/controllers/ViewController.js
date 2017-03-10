/**
 * Render website pages
 */
module.exports = class ViewController extends Controller {

  static get pageMapping () {
    return {
      'services/node-js-development': 'NodeServicePage',
      'services/front-end-development': 'FrontendServicePage',
      'services/design': 'DesignServicePage',
      'opensource': 'OpenSourcePage',
      'contact': 'ContactPage'
    }
  }

  page (request, reply) {
    const { page } = request.params
    const component = ViewController.pageMapping[page] || 'HomePage'

    reply.view(`components/environments/${component}`)
  }
}
