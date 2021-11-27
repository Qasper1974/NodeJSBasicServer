const path = require('path');

const rootDir = require('./utilities/path');

const express = require('express');

const bodyparser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop')
const adminData = require('./routes/admin')

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use('/', (req, res, next)=>{
    res.status(404).render('404', { pageTitle : 'Page not found'} );
})

app.listen(3000); 

