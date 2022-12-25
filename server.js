const express = require("express");

const bodyParser = require('body-parser');
const cors = require("cors");
const root = './';
const port = process.env.PORT || '3000';
const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const adherent_routes = require('./app/controllers/adherent/adherent_router');
app.use('/bcsto', adherent_routes);


//  connect to database
require('./mongoDB').DBconnect();

app.listen(port, () => console.log(`API running at localhost:${port}\/bcsto`));


app.get('*', (req, res) => {
  res.json( "<p> BCSTO web-server activated .... </p>" );
});


/*/ // define GET handler for root URL

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BCSTO web-server...." });
});
*/

