const React = require('react');
const ReactGA = require('react-ga');

const Component = React.createClass({

  render: function () {

    return (
      <html>
        <head>
          <meta name="description" content="Web application design, development, enterprise architecture, hiring, and training for Node.js and React.js" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="author" href="https://plus.google.com/108812193853051708628" />
          <link ref="publisher" href="https://plus.google.com/108812193853051708628" />

          <title>Langa | Enterprise Web Development and Design</title>

          <link rel="stylesheet" href="/assets/styles/prod.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        </head>
        <body>
          <div id="app-mount"
              dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
          <script id="app-state"
              dangerouslySetInnerHTML={{ __html: this.props.state }}>
          </script>
          <script src="/assets/client.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Component;
