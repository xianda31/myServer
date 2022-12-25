const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adherentSchema = new Schema(
  {
    adh_key: { type: String, required: true, unique: true },
    firstName: String,
    lastName:String,
    zip: String,
    license: Number
  },
  {
    collection: 'adherents'  // au lieu de Heros,  nom par défaut de la collection cf règles d’affectation de noms au pluriel de Mongoose).
  }
);

const Adherent = mongoose.model('Adherent', adherentSchema);

module.exports = Adherent;