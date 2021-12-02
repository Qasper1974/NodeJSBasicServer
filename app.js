const path = require('path');

const rootDir = require('./utilities/path');

const express = require('express');

const bodyparser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const errorController = require('./controllers/error')

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)

app.listen(3000); 

