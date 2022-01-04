const bcrypt = require("bcrypt");
module.exports = (config, registerService) => {
    return {
        register:  async function (req, res, next) {
            try {
                const details =  registerService.findOneModel(req.body.email)
                console.log(details);
                if (details == null) {
                    var Data ={
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password: req.body.password,
                        salt: ''
                    }
                    const salt =  await bcrypt.genSalt();
                    console.log(salt);
                    Data.salt = salt;
                    Data.password = await bcrypt.hash(Data.password, salt);
                    console.log("password", Data)
                    const adddata =  registerService.saveData(Data)
                    // const detail = Data.save()
                    res.send("registered succesfully")
                } else {
                    res.send("you have already existed,please login")
                }
        
            } catch (err) {
                res.send(err)
            }

        }
    }
}