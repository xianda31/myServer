const MemberDoc = require("./member_model");


// READ all members
async function readMembers() {
    const docList = [];
    const docquery = await MemberDoc.find({});   
    docquery.forEach((d) => docList.push(d));
    return docList;
}

// CREATE a member
 async function createMember(reqBody) {

    delete reqBody._id ;
    const newDoc = new MemberDoc ({ ... reqBody});
    
    const aPromise = new Promise((resolve,reject) => {
    newDoc.save()
        .then((doc) =>  resolve(doc))
        .catch((err) => reject(err.name + ":" + err.code));
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


// DELETE member[id]
async function deleteMember(memberId) {
    const aPromise = new Promise((resolve,reject) => {
        MemberDoc.deleteOne({_id : memberId})
        .then((doc) => resolve(doc))
        .catch((err) => reject(err.message));
    });
    return aPromise;
}

module.exports = {
    createMember,
    readMembers,
    updateMember,
    deleteMember,
};
