module.exports = async (config) => {
    const userModel = require('../model/model')
    const registerService = require('../service/registerService')(userModel)
    const loginController = require('../Controller/loginController')(config, registerService)
    return {
        register: function (req, res) {
            loginController.register(req, res);
        }
}
}
