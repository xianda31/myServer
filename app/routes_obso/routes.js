module.exports = app => {
    const adherentCntrl = require("../controllers/adherent_controller.js");
  
    var router = require("express").Router();

    //  function with no mount path, and executed for every request to the router
    router.use(function(req,res,next) {
      console.log("@Time:",Date());
      next();
    });
  
    // Create a new adherent
    router.post("/", adherentCntrl.create);
  
    // Retrieve all adherents
    router.get("/", adherentCntrl.findAll);
  
    // Retrieve all published adherents
    router.get("/published", adherentCntrl.findAllPublished);
  
    // Retrieve a single adherent with id
    router.get("/:id", adherentCntrl.findOne);
    
      // Update a Adherent with id
  router.put("/:id", adherentCntrl.update);

  // Delete a Adherent with id
  router.delete("/:id", adherentCntrl.delete);

  // Delete all adherents
  router.delete("/", adherentCntrl.deleteAll);

  app.use('/adherents', router);
}