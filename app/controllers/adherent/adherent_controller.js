const MemberDoc = require("./member_model");


// READ all members
async function readMembers() {
    const docList = [];
    const docquery = await MemberDoc.find({});   
    docquery.forEach((d) => docList.push(d));
    return docList;
}

// CREATE a member
 async function createMember(doc) {
     console.log(" server creating  doc :",doc);
    
    const aPromise = new Promise((resolve,reject) => {
    doc.create()
        .then((doc) => { console.log(doc);
                        resolve(doc);})
        .catch((err) => {   console.log("err");
                            reject(err.message)}
                            );
    });
    return aPromise;
}

// UPDATE member[id]
async function updateMember(member) {
    const aPromise = new Promise((resolve,reject) => {
    MemberDoc.findOneAndUpdate({_id : member._id},member)
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
    createMember,
    readMembers,
    updateMember,
    deleteHero,
};
