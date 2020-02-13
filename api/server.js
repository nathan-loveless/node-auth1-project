const express = require('express');
const session = require('express-session');
const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');

const server = express();
const sessionConfig = {
    name: 'monkey', // sid (default cookie)
    secret: 'keep it secret, keep it safe',
    cookie: {
        maxAge: 1000 * 30,
        secure: false, // dev only in production make it true
        httpOnly: true,
    },
     resave: false, // recreate if nothing has saved
     saveUninitialized: false,  // GDPR laws against setting cookies automatically
};

configureMiddleware(server);
server.use(session(sessionConfig));
server.use('/api', apiRouter);

module.exports = server;