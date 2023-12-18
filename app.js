var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

const db = require('./config/db'); 
const dotenv=require('dotenv');

// Load Config File
dotenv.config({path:'./config/config.env'});


// Connect To Database
const dbConnection = db.connectToDatabase();

// Express App
var app = express();

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Load Routes
const productRouter=require('./routes/products');
const featuredRouter=require('./routes/featured');
const newRouter=require('./routes/new');
const recentRouter=require('./routes/recent');
// Use Routes
app.use('/products', productRouter);
app.use('/featured', featuredRouter);
app.use('/new', newRouter);
app.use('/recent',recentRouter);





module.exports = app;
