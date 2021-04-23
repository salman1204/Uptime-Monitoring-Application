// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const enviroment = require('./helpers/enviroments');
const data = require('./lib/data');
// app object - module scaffolding
const app = {};
data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bengali' }, (err) => {
    console.log('error was', err);
});
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
