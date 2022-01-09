var express = require('express');
var app = express();
var db = require('./db');

const port = process.env.PORT || 6038;

var cors = require('cors');
app.use(cors());



const AuthController = require('./auth/authcontroller');
app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log('Listing to port '+port)
})