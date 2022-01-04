module.exports = async (mongoose) => {
    const db = {};
    db.mongoose = mongoose;
   
    db.url='mongodb://localhost/models'
    db.mongoose.connect(db.url, {
        useNewUrlParser:true
    }).then(() =>{
        console.log('DB connected, you can proceed');
    }).catch((err) => {
        console.log('DB is not connected');
    })
   
   
return db;
}