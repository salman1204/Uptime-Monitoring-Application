// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const enviroment = require('./helpers/enviroments');

// app object - module scaffolding
const app = {};

// config
app.config = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(enviroment.port, () => {
        console.log(`Listening to port ${enviroment.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start server
app.createServer();
