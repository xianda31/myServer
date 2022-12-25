const express = require('express');
const router = express.Router();
const adherentService = require('./adherent_controller');


// READ all Heroes
router.get('/adherents', (req, res) => {
    
     adherentService.readAdherents()
     .then( (heroes) => res.status(200).send(heroes));
});

 // CREATE a hero
router.post('/hero', (req, res) => {
    adherentService.createHero(req.body)
    .then((doc) => res.status(200).send(doc))
    .catch ((err) => res.status(403).send(err));
  });

// UPDATE hero[id]
  router.put('/hero/:uid', (req, res) => {
    adherentService.updateHero(req.body)
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

