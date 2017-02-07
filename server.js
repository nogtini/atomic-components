const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiReactViews = require('hapi-react-views');

const server = new Hapi.Server();

server.connection({port: process.env.PORT || 8080});
server.register([Inert, Vision], error => {

  if (error) {
    console.log('failed to load plugins');
  }

  // Views are compiled by Gulp on install to the dist folder.
  server.views({
    engines: {
      js: HapiReactViews,
    },
    relativeTo: __dirname,
    path: 'dist/components',
    compileOptions: {
      renderMethod: 'renderToString',
      layoutPath: Path.join(__dirname, 'dist', 'components'),
      layout: 'html',
    },
  });

  // Static assets route
  server.route({
    method: 'GET',
    path: '/assets/{file*}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'dist', 'assets')
      }
    }
  });

  // Home route
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('App');
    },
  });

  // Finally, start listening on that port.
  server.start(err => {
    if (err) {
      throw err;
    }
    console.log('Server is listening at ' + server.info.uri);
  });

});
