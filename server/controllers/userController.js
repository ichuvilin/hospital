const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const uuid = require("uuid");
const path = require("path");
const jwt = require('jsonwebtoken')

const generateJWT = (id, firstName, lastName, patronymic, email, date, registration, role, photo) => {
    return jwt.sign(
        {id, firstName, lastName, patronymic, email, date, registration, role, photo},
        process.env.SECRET_KEY,
        {expiresIn: '24h', algorithm: 'HS512'},
    );
}

class UserController {
    async registration(req, res, next) {
        const {
            last_name,
            first_name,
            patronymic,
            email,
            password,
            date,
            registration,
            role
        } = req.body;
        const {photo} = req.files;
        if (!email || !password) return next(ApiError.badRequest("Некоректный email или пароль"));
        const candidate = await User.findOne({where: {email}})
        if (candidate) return next(ApiError.badRequest("Пользователь с таким email уже существует"));

        let fileName = uuid.v4() + ".jpg"
        photo.mv(path.resolve(__dirname, "..", 'static', fileName))
        const hashPassword = await bcrypt.hash(password, 5);

        const user = await User.create({
            last_name,
            first_name,
            patronymic,
            email,
            password: hashPassword,
            date,
            registration,
            role,
            photo: fileName
        })

        const token = generateJWT(user.id, last_name, first_name, patronymic, email, date, registration, user.role, fileName);
        return res.json({token});

    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) return next(ApiError.internal("Пользователь не найден"));
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) return next(ApiError.internal("Пароль не верный"));
        const token = generateJWT(user.id, user.last_name, user.first_name, user.patronymic, email, user.date, user.registration, user.role, user.photo);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJWT(
            req.user.id,
            req.user.last_name,
            req.user.first_name,
            req.user.patronymic,
            req.user.email,
            req.user.date,
            req.user.registration,
            req.user.role,
            req.user.photo
        )
        return res.json({token});
    }

    async getOne(req,res) {
        const {id} = req.params
        const user = await User.findOne({where: {id}, include: {all: true}})
        return res.json(user);
    }

}

module.exports = new UserController();