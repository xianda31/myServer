const express = require('express');
const router = express.Router();
const adherentService = require('./adherent_controller');
const MemberDoc = require('./member_model');


router.route('*').all((req, res, next) => {
  console.log("requete ...",req.params);
  next();
}
);

 // CREATE a member
 
 router.post('/adherent', (req, res,next) => {
   
   delete req.body._id ;
   const doc = new MemberDoc ({ ... req.body});
  console.log("server router / create",doc);
   doc.save()
   .then(() => res.status(201).send(doc))
   .catch(error => { console.log("erreur :",error);
                      res.status(401).json( error.name + ":" + error.code );}
   
   );

  
  // adherentService.createMember(doc)
  //  .then((doc) => res.status(200).send(doc))
  //  .catch ((err) => res.status(403).send(err));

 });
 
// READ all Heroes
router.get('/adherents', (req, res,next) => {
    console.log("get all");
     adherentService.readMembers()
     .then( (members) => res.status(200).send(members));
});



// UPDATE Member[id]
  router.put('/adherent/:uid', (req, res) => {

    console.log("serving update");

    adherentService.updateMember(req.body)
    .then((doc) => res.status(200).send(doc))
    .catch ((err) => res.status(403).send(err));
  });
  
  // DELETE hero[id]
  router.delete('/hero/:id', (req, res) => {
    adherentService.deleteHero(req.params.id)    
    .then((doc) => res.status(200).send(doc))
    .catch ((err) => res.status(403).send(err));
  });

  module.exports = router ;

