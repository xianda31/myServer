module.exports = mongoose => {
    
  const schema = new mongoose.Schema({
          lastName: String,
          firstName: String,
        },
        { hasPayed: false }) ;

  const model = mongoose.model('Adherent',schema) ;

    
    return model;
  };