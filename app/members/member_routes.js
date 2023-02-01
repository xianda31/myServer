const adherentService = require("./member_mongo_controller");


function set_member_routes(router){

// CREATE a member

router.post("/adherent", (req, res, next) => {
    adherentService
      .createMember(req.body)
      .then((doc) => res.status(201).send(doc))
      .catch((error) => {
        console.log("erreur :", error);
        res.status(401).send(error.name + ":" + error.code);
      });
  });
  
  // READ all members
  router.get("/adherents", (req, res, next) => {
   
    adherentService
      .readMembers()
      .then((members) => res.status(200).send(members));
  });
  
  // UPDATE Member[id]
  router.put("/adherent/:uid", (req, res) => {
  
    adherentService
      .updateMember(req.body)
      .then((doc) => res.status(200).send(doc))
      .catch((err) => res.status(403).send(err));
  });
  
  // DELETE member[id]
  router.delete("/adherent/:id", (req, res) => {
    adherentService
      .deleteMember(req.params.id)
      .then((doc) => res.status(200).send(doc))
      .catch((err) => res.status(403).send(err));
  });
  
}
module.exports = {
    set_member_routes,
}