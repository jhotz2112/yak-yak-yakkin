// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');
const Photo = require('./models/photo');

// Local variables will come in handy for holding retrieved documents
let u, i, c, o, p;
