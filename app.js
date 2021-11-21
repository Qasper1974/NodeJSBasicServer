const express = require('express');

const bodyparser = require('body-parser')

const app = express();

const shoproutes = require('./routes/shop')
const adminroutes = require('./routes/admin')

app.use(bodyparser.urlencoded({extended: false}));

app.use(adminroutes);
app.use(shoproutes);

app.listen(3000); 

