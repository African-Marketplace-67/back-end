const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const authRouter = require('./auth/auth-router.js');
const itemRouter = require('./items/item-router')
const restricted = require('./middleware/restricted')

const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json());

server.use('/auth', authRouter);
server.use('/items',restricted, itemRouter)

//this iss and aexttra comment
module.exports = server;
