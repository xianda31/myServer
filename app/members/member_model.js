const mongoose = require("mongoose");


const MemberSchema = new mongoose.Schema(
  {
    
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    zip: String,
    license: Number,
    status: Number,
    adh_key:   String,
  },
  {
    collection: "members", // =  nom par défaut de la collection cf règles d’affectation de noms au pluriel de Mongoose).
  }
);

module.exports = mongoose.model("Member", MemberSchema);
