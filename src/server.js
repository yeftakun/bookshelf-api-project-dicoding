const hp = require('@hapi/hapi');
const rute = require('./routes');

const init = async () => {
  const server = hp.server({
    port: 9000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(rute);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
