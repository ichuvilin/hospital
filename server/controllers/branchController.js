const {Branch} = require('../models/models')

class BranchController {
    async create(req, res) {
        const {name} = req.body;
        const branch = await Branch.create({name})
        return res.json(branch);
    }

}

module.exports = new BranchController()