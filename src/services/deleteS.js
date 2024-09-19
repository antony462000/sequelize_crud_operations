const userModel = require('../../models/User')
module.exports = async (data) => {
    try {
        await userModel.destroy({ where: { id: data.id } })
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)

    }

}