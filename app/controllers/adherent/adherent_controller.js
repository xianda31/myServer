const Adherent = require("./adherent_model");

//require("../mongo").connect();


// READ all Heroes
async function readAdherents() {
    const docList = [];
    const docquery = await Adherent.find({},{ _id: 0 });   
   
    
    docquery.forEach((d) => docList.push(d));
    console.log("got %s adherents...",docList.length);
    return docList;
}

// CREATE a hero
 async function createHero(hero) {
    const aPromise = new Promise((resolve,reject) => {
    Hero.create(hero)
        .then((doc) => resolve(doc))
        .catch((err) => reject(err.message));
    });
    return aPromise;
}

// UPDATE hero[id]
async function updateHero(hero) {
    const aPromise = new Promise((resolve,reject) => {
    Hero.findOneAndUpdate({id : hero.id},hero)
        .then((doc) => resolve(doc))
        .catch((err) => reject(err.message));
    });
    return aPromise;
}


// DELETE hero[id]
async function deleteHero(heroId) {
    const aPromise = new Promise((resolve,reject) => {
    Hero.findOneAndDelete({id : heroId})
        .then((doc) => resolve(doc))
        .catch((err) => reject(err.message));
    });
    return aPromise;
}

module.exports = {
    createHero,
    readAdherents,
    updateHero,
    deleteHero,
};
