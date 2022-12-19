const {Doctor, Cabinet, Branch} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require("../error/ApiError");

class DoctorController {

    async create(req, res, next) {
        try {
            const {
                last_name,
                first_name,
                patronymic,
                speciality,
                cabinet,
                branch_id
            } = req.body;
            const {photo} = req.files;
            let fileName = uuid.v4() + ".jpg"
            photo.mv(path.resolve(__dirname, "..", 'static', fileName))
            const doc = await Doctor.create({
                last_name,
                first_name,
                patronymic,
                photo: fileName,
                speciality,
                branchId: branch_id
            })
            const doctorId = doc.id
            await Cabinet.create({room: cabinet, doctorId})
            return res.json(doc);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const doctor = await Doctor.findAll({include: {all: true}})
        return res.json(doctor);
    }
}


module.exports = new DoctorController()