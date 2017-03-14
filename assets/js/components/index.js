import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { FooterSection, HeaderSection } from './ecosystems'
import {
  HomePage,
  FrontendServicePage,
  NodeServicePage,
  DesignServicePage,
  OpenSourcePage,
  ContactPage
} from '../components/environments'
import initConsole from '../console'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <HeaderSection />

      <Route exact path="/" component={HomePage} />
      <Route path="/services/node-js-development" component={NodeServicePage} />
      <Route path="/services/front-end-development" component={FrontendServicePage} />
      <Route path="/services/design" component={DesignServicePage} />
      <Route path="/opensource" component={OpenSourcePage} />
      <Route path="/contact" component={ContactPage} />

      <FooterSection />
    </div>
  </BrowserRouter>,
  document.getElementById('app-mount')
)

initConsole()
