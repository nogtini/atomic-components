/**
 * Render website pages
 */
module.exports = class ViewController extends Controller {

  static get pageMapping () {
    return {
      'node-js-development': 'NodeServicePage',
      'front-end-development': 'FrontendServicePage',
      'design': 'DesignServicePage',
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
