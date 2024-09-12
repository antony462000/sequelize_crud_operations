
const createUserS = require('../services/createUserS')
module.exports = (req, res) => {
    var myService = createUserS(req.body)
    res.send(myService)
}