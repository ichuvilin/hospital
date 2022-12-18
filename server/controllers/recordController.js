const {Record} = require("../models/models");

class RecordController {
    async create(req, res) {
        const {date, cabinet, user_id, doctor_id} = req.body;
        const record = await Record.create({date, cabinet, user_id, doctor_id})
        return res.json(record)
    }

    async getAllRecordForOneUser(req, res) {
        const {id} = req.params
        const records = await Record.findAll({where: {user_id: id}})
        return res.json(records);
    }
}

module.exports = new RecordController();