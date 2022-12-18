const {Cabinet} = require('../models/models')
const ApiError = require('../error/ApiError')

class CabinetController {
    async create(req, res) {
        const {room} = req.body;
        const cabinet = await Cabinet.create({room});
        return res.json(cabinet);
    }

    async getAll(req, res) {
        const cabinet =  await Cabinet.findAll()
        return  res.json(cabinet);
    }
}

module.exports = new CabinetController();