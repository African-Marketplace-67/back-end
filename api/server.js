const express = require('express');
const helmet = require('helmet');
const authRouter = require('./auth/auth-router.js');
//const ownerRouter = require('./owner/owner-router')

const server = express();

server.use(express.json());

server.use('/api/auth', authRouter);
//server.use('/api/owner', ownerRouter)
//server.use('/api/jokes', restrict, jokesRouter)
// DECIDE ON AUTHENTICATION AND IMPLEMENT FOR ROUTER. ROLLBACK ON LOCAL AND HEROKU BEFORE CHANGING ANYTHING!!!!
//this iss and aexttra comment
module.exports = server;
