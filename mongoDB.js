const mongoose = require('mongoose');


const mongoUri = "mongodb://localhost:27017/bcsto";

function DBconnect() {
//mongoose.set('debug', true);
mongoose.set('strictQuery', false);

mongoose
  .connect(mongoUri)
  .then((x) => {
    console.log(`server connected to Mongo database named: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason);
  });

}

module.exports = {
DBconnect,

};