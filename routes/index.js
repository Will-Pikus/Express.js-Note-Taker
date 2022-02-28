const express = require('express');

// Import modular routers for /notes
const notes = require('./notes');

const app = express();

app.use('/notes', notes);

module.exports = app;