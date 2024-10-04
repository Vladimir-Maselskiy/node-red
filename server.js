const http = require('http');
const RED = require('node-red');

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Node-RED is running');
});

const settings = {
  httpAdminRoot: '/red',
  httpNodeRoot: '/',
  userDir: './',
  flowFile: 'flows.json',
  credentialSecret: 'my-credential-secret',
  uiPort: process.env.PORT || 1880,
};

RED.init(server, settings);
server.listen(settings.uiPort);

RED.start();
