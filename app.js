const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Hier zijn we gepasseerd.');
    next();
} )

app.use((req, res, next) => {
    console.log('Hier zijn we ook nog een keertje gepasseerd.');
    res.send('<h2>Hoi hoi hoi!</h2>');
} )

app.listen(3000); 