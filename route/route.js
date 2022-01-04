module.exports = async ( app, router, config) => {

     const routes =config.routes;
    const process =await require('../utilities/process')(config);

    router.post(routes.register, process.register);

}

// const bcrypt = require('bcrypt');

// router.post('/register', async (req, res) => {
    
// })




// ----------------------------------without password encryption--------------------------
//     try {
//         const details = await model.findOne(emailbody, { set: querybody })
//         console.log(details);
//         if(details === null){
//             const detail= Data.save() 
//             res.send("registered succesfully")
//         }else{
//             res.send("you have already existed,please login")
//         }


//     } catch (err) {
//         res.send('error occured', err)
//     }
// })

// ---------------------------------untill here--------------------------------------------------

// router.get('/login', async (req, res) => {
//     const Data = new model({
//         email: req.body.email,
//         password: req.body.password
//     })
//     const emailbody = { email: req.body.email }
//     const querybody = req.body
//     try {

//         const details = await model.findOne({ email: req.body.email })
//         if (details === null) {
//             res.send("invalid email")
//         } else {
//             const newpassword = await bcrypt.hash(Data.password, details.salt);
//             if (newpassword === details.password) {
//                 res.send("Login successfully...")
//             } else {
//                 res.send("Invalid Password...")
//             }
//         }
//     } catch (err) {
//         res.send('error occured', err)
//     }
// })

// router.get('/api', async (req, res) => {
//     try {
//         const c = [];
//         const details = await model.find()

//         for (let i of details) {
//             let b = {
//                 id: i._id,
//                 email: i.email,
//                 password: i.password
//             }
//             c.push(b)
//         }
//         res.send(c)

//     } catch (err) {
//         res.send(err)
//     }

// });

// router.get('/apis', async (req, res) => {

//     try {
//         const arrayDetails = []

//         const details2 = await model.find()
//         for (let i of details2) {
//             let obj = {
//                 id: i.id,
//                 details: {
//                     firstname: i.firstname,
//                     lastname: i.lastname,
//                     email: i.email,
//                     password: i.password
//                 }
//             }
//             arrayDetails.push(obj);


//         }
//         console.log(arrayDetails)
//         res.send(arrayDetails);

//     } catch (err) {
//         res.send(err)
//     }
// })

// router.get('/apis', async (req, res) => {
//     try {
//         const arrayDetails = []
//         const details2 = await model.find()

//     } catch (err) {

//     }
// })



// // --------------------------------------------------normal read api-----------
// router.get('/read', async (req, res) => {
//     try {
//         var Data;
//         if (req.body.id) {
//             Data = await model.findById(req.body.id)
//         } else {
//             Data = await model.find();
//         }
//         res.send(Data)
//     } catch (err) {
//         res.send('error occured', err)
//     }
// })
// // --------------------------------------------------untill here------------------------


// router.put('/update', async (req, res) => {
//     const queryParam = { _id: req.body.id };
//     const querybody = req.body
//     try {
//         const details = await model.updateOne(queryParam, { $set: querybody })
//         if (details.modifiedCount > 0) {
//             res.send("updated successfully..")
//         } else {
//             res.send("something went wrong...")
//         }
//     } catch (err) {
//         res.send('error occured', err)
//     }
// })
// router.delete('/delete', async (req, res) => {
//     const queryParam = { _id: req.body.id };
//     try {
//         const details = await model.deleteOne(queryParam)
//         if (details.deletedCount > 0) {
//             res.send("deleted successfully...")
//         } else {
//             res.send("something went wrong...")
//         }
//     } catch (err) {
//         console.log('err', err)
//     }
// })


// module.exports = router;


