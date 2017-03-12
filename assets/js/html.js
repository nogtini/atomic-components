import React, { PropTypes, Component } from 'react'

export default class IndexPage extends Component {

  static get propTypes () {
    return {
      children: PropTypes.any,
      state: PropTypes.any
    }
  }

  render () {
    return (
      <html>
        <head>
          <title>Langa | Enterprise Web Development</title>
          <meta charSet="utf-8"></meta>
          <meta name="description" content="Web application design, development, enterprise architecture, hiring, and training for Node.js and React.js"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>

          <link rel="author" href="https://plus.google.com/108812193853051708628" />
          <link ref="publisher" href="https://plus.google.com/108812193853051708628" />
          <link rel="icon" href="//cdn.langa.io/art/icons/favicon.png" type="image/png" />
          <link rel="stylesheet" href="/style/global.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300" rel="stylesheet" />
          <link rel="stylesheet" href="//cdn.langa.io/art/misc/fontello/css/fontello.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.0/gh-fork-ribbon.min.css" />
					<script dangerouslySetInnerHTML={{__html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-75758860-2', 'auto');
              ga('send', 'pageview');
            `}} />
        </head>
        <body>
          <div id="app-mount"
              dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
          <script id="app-state"
              dangerouslySetInnerHTML={{ __html: this.props.state }}>
          </script>
        </body>
      </html>
    )
  }
}
