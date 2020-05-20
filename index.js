'use strict';
const path = require('path');
const express = require('express');
const logger = require('./middleware/logger');
const app = express();
const PORT = process.env.PORT || 5000;



// Initialize middleware
// app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/members', require('./routes/api/members'));


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
