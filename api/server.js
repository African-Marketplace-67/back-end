const express = require('express');
const helmet = require('helmet');
const authRouter = require('./auth/auth-router.js');
const itemRouter = require('./items/item-router')
const restricted = require('./middleware/restricted')
const server = express();

server.use(express.json());

server.use('/auth', authRouter);
server.use('/items',restricted, itemRouter)
//server.use('/api/jokes', restrict, jokesRouter)
// DECIDE ON AUTHENTICATION AND IMPLEMENT FOR ROUTER. ROLLBACK ON LOCAL AND HEROKU BEFORE CHANGING ANYTHING!!!!
//this iss and aexttra comment
module.exports = server;
