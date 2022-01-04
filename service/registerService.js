module.exports =  (model) => {
    return {
        findOneModel:async function (email) {
           await model.findOne({email: email}).exec();
        },
        saveData: async function(body) {
           await model.save(body).exec();
        }
       
    }
}
