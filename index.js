/*
    Project Title: Uptime Monitoring Application;
    Brief Description: A restful API to monitor up or down time of user defined links
    Author: Md.Salman
    Data: 20/04/2021
*/

// Dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// config
app.config = {
    port: 8000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = (req, res) => {
    res.end('hello Progra');
};

// start server
app.createServer();
