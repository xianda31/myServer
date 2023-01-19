const express = require("express");
const app = express();

const cors = require("cors");
const root = './';
const port = process.env.PORT || '3000';


app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const adherent_routes = require('./app/controllers/adherent/adherent_router');
app.use('/bcsto', adherent_routes);

//  connect to database
require('./mongoDB').DBconnect();

module.exports = app;