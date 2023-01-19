const express = require("express");

//const bodyParser = require('body-parser');
const cors = require("cors");
const root = './';
const port = process.env.PORT || '3000';
const app = express();

//  connect to database
require('./mongoDB').DBconnect();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json()); 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const adherent_routes = require('./app/controllers/adherent/adherent_router');
app.use('/bcsto', adherent_routes);


app.listen(port, () => console.log(`API running at localhost:${port}\/bcsto`));



// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   console.log("requête reçue");
//   // next(createError(404));

// });
// error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message); // Log error message in our server's console
//   if (!err.statusCode) err.statusCode = 500 ;// If err has no specified error code, set error code to 'Internal Server Error (500)'
//   res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
// });

/*/ // define GET handler for root URL

*/

