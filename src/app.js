const express = require('express');
const routes = require('./routes');

const app = express();

// parse json request body
app.use(express.json());

// api routes
app.use('/', routes);

module.exports = app;