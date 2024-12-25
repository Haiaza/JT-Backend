const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Routers
const usersRouter = require('./controllers/users');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connection established to ${mongoose.connection.name} Backend`)
});

app.use(express.json());

// Routes Go Here

app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Express is running!')
});