const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');

const feedRoutes = require('./routes/feed')
const progressRoutes = require('./routes/progress')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);
app.use('/progress', progressRoutes);
mongoose.connect(
    'mongodb+srv://Eunju:zheldgkwk2020@e-waste-cqzm3.mongodb.net/test?retryWrites=true&w=majority'
).then(result => {
    app.listen(8080);
})
.catch(err => console.log(err));

