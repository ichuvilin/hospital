const {Doctor, Cabinet} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require("../error/ApiError");
const {where} = require("sequelize");

class DoctorController {

    async create(req, res, next) {
        try {
            const {
                last_name,
                first_name,
                patronymic,
                speciality,
                cabinet_id,
                branch_id
            } = req.body;
            const {photo} = req.files;
            let fileName = uuid.v4() + ".jpg"
            photo.mv(path.resolve(__dirname, "..", 'static', fileName))
            console.log("OK")
            const doc = await Doctor.create({
                last_name,
                first_name,
                patronymic,
                photo: fileName,
                speciality,
                cabinet_id,
                branch_id,
            })
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