module.exports = app => {
    const adherents = require("../controllers/mongo.controller.js");
  
    var router = require("express").Router();

    //  function with no mount path, and executed for every request to the router
    router.use(function(req,res,next) {
      console.log("@Time:",Date());
      next();
    });
  
    // Create a new adherent
    router.post("/", adherents.create);
  
    // Retrieve all adherents
    router.get("/", adherents.findAll);
  
    // Retrieve all published adherents
    router.get("/published", adherents.findAllPublished);
  
    // Retrieve a single adherent with id
    router.get("/:id", adherents.findOne);
    
      // Update a Adherent with id
  router.put("/:id", adherents.update);

  // Delete a Adherent with id
  router.delete("/:id", adherents.delete);

  // Delete all adherents
  router.delete("/", adherents.deleteAll);

  app.use('/adherents', router);
}