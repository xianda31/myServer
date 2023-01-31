const mongoose = require("mongoose");


const MemberSchema = new mongoose.Schema(
  {
    
    firstName: String,
    lastName: String,
    mail: String,
    tel: String,
    address: String,
    city: String,
    zip: String,
    license: Number,
    status: Number,
  },
  {
    collection: "members", // =  nom par défaut de la collection cf règles d’affectation de noms au pluriel de Mongoose).
  }
);

module.exports = mongoose.model("Member", MemberSchema);
