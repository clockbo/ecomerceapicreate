// importing required packages
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const port=process.env.port || 3000;

// initializing express
const app = express();
// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(port, function(){
    console.log('API is live on https://ecomerce-api.up.railway.app/products');
});