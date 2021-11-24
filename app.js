const path = require('path');

const rootDir = require('./utilities/path');

const express = require('express');

const bodyparser = require('body-parser')

const app = express();

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000); 

