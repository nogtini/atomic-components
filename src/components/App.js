import React, { PropTypes, Component } from 'react'

import Header from './header';
import Body from './body';
import Contact from './contact';
import Footer from './footer';
import ReactGA from 'react-ga'

class App extends Component {

  render() {

    if (typeof window != 'undefined') {
      ReactGA.initialize('UA-75758860-2');
      ReactGA.pageview('/')
    }

    return (
      <section>
        <Header />
        <Body />
        <Contact />
        <Footer />
      </section>
    );
  }
}

App.propTypes = {
  children: PropTypes.any
};

export default App;
