const express = require('express');
const helmet = require('helmet');
const authRouter = require('./auth/auth-router.js');


const server = express();

server.use(express.json());

server.use('/api/auth', authRouter);
//server.use('/api/jokes', restrict, jokesRouter)

module.exports = server;
