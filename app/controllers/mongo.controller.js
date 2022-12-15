const db = require("../mongoModels/defineModel");
const Model = db.model;

// Create and Save a new adherent
exports.create = (req, res) => {

    if (!req.body.lastName) {
        res.status(400).send ({message : "le nom ne peut être vide !"});
        return ;
    }


    // création
    const adherent =  new Model({
        lastName:req.body.lastName,
        firstName:req.body.firstName,
        hasPayed: req.body.hasPayed ? req.body.hasPayed : false
    });
    
    
    // ecriture en db
    adherent.save()
    .then(data => {res.send(data);})
    .catch (err => {res.status(500).send ({message : err.message || "erreur d\'écriture en base de données"});
    }) ;

};

// Retrieve all adherents from the database.
exports.findAll = (req, res) => {
  
};

// Find a single adherent with an id
exports.findOne = (req, res) => {
  
};

// Update a adherent by the id in the request
exports.update = (req, res) => {
  
};

// Delete a adherent with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all adherents from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published adherents
exports.findAllPublished = (req, res) => {
  
};