const {Branch} = require('../models/models')

class BranchController {
    async create(req, res) {
        const {name} = req.body;
        const branch = await Branch.create({name})
        return res.json(branch);
    }

    async getAll(req, res) {
        const branch = await Branch.findAll();
        return res.json(branch)
    }

}

module.exports = new BranchController()