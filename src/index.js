import './console'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import {
  FrontendServicePage,
  NodeServicePage,
  DesignServicePage,
  OpenSourcePage,
  ContactPage
} from './components/pages'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="services/front-end-development" component={FrontendServicePage} />
      <Route path="services/node-js-development" component={NodeServicePage} />
      <Route path="services/design" component={DesignServicePage} />
      <Route path="opensource" component={OpenSourcePage} />
      <Route path="contact" component={ContactPage} />
    </Route>
  </Router>
), document.getElementById('root'))
