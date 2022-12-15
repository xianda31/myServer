const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// create & connect to database
const db = require("./app/mongoModels/defineModel");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database ",db.url);
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  /*END OF MONGOOSE SETUP*/

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// // define GET handler for root URL

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BCSTO web-server...." });
});

// define  the router module handling  routes starting from / (???)
require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});