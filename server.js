const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();
app.use(bodyParser.json());

//mlab.com URI link, using AWS sandbox, makes new variable db for connecting
const db = require('./config/keys').mongoURI;
//connect to DB
mongoose
    .connect(db)
    .then(() => console.log('connected to db... ')) //if it connects then
    .catch(err => console.log(err)); // if it doesn't connect then

app.use('/api/items', items);

const port = process.env.PORT || 5000; // this allows us to go serverless || local

app.listen(port, () => console.log(`server started on port ${port}`)); //listen on above port