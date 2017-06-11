let express = require('express');
let app = express();
let database = require('./config/database');
let UserModel = database.import("./models/UserModel");

let server = require('http').createServer(app);
let io = require('socket.io')(server);
let socketioJwt   = require("socketio-jwt");
let config = require('./config/passport.config');

io.use(socketioJwt.authorize({
    secret: config.jwtSecret,
    handshake: true
}));

server.listen(4343);

io.on('connection', function(socket) {
	
});

module.exports = io;