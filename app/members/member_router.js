const express = require("express");
const router = express.Router();
const adherentService = require("./member_mongo_controller");
const MemberDoc = require("./member_model");

router.route("*").all((req, res, next) => {
  console.log(timeIs(), req.method);
  next();
});

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


function timeIs() {
  const date_ob = new Date();
  const hours = date_ob.getHours();
  const minutes = date_ob.getMinutes();
  const seconds = ("0" + date_ob.getSeconds()).slice(-2);
  

 //  HH:MM:SS format

 const tag =  hours +  ":" +  minutes +  ":" +   seconds  ;
  return (tag);
      
} 
    module.exports = router;