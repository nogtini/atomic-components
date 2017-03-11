/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

module.exports = [

  {
    method: 'GET',
    path: '/sitemap.xml',
    handler: {
      file: 'assets/sitemap.xml'
    }
  },

  {
    method: 'GET',
    path: '/style/global.css',
    handler: {
      file: 'dist/styles/global.css'
    }
  },

  {
    method: 'GET',
    path: '/robots.txt',
    handler: {
      file: 'assets/robots.txt'
    }
  },

  {
    method: 'GET',
    path: '/{page?}',
    handler: 'ViewController.page'
  },
  {
    method: 'GET',
    path: '/services/{page}',
    handler: 'ViewController.page'
  },

  {
    method: 'POST',
    path: '/contact',
    handler: 'ContactController.contact'
  }

]
