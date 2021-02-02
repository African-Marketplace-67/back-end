const express = require('express');
const helmet = require('helmet');
const authRouter = require('./auth/auth-router.js');
const itemRouter = require('./items/item-router')

const server = express();

server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/items', itemRouter)
//server.use('/api/jokes', restrict, jokesRouter)
// DECIDE ON AUTHENTICATION AND IMPLEMENT FOR ROUTER. ROLLBACK ON LOCAL AND HEROKU BEFORE CHANGING ANYTHING!!!!
//this iss and aexttra comment
module.exports = server;
