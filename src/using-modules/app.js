const http = require('http');
const routes = require('./routes'); //.js is appended by node by default

const server = http.createServer(routes);
// const server = http.createServer(routes.handler);

server.listen(3000);
