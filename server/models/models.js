const sequelize = require("../db")
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: true},
    photo: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING},
    date: {type: DataTypes.DATEONLY},
    registration: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Doctor = sequelize.define('doctor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: true},
    photo: {type: DataTypes.STRING, defaultValue: "defaultImage.png", allowNull: true},
    speciality: {type: DataTypes.STRING, allowNull: false},
    cabinet_id: {type: DataTypes.INTEGER, allowNull: false, unique: true},
    branch_id: {type: DataTypes.INTEGER, allowNull: false}
})

const ServiceStaff = sequelize.define('service-staff', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: true},
    job_title: {type: DataTypes.STRING, allowNull: false},
    branch_id: {type: DataTypes.INTEGER, allowNull: false}
})

const Branch = sequelize.define('branch', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Ward = sequelize.define('ward', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    branch_id: {type: DataTypes.INTEGER, allowNull: false},
    count_beds: {type: DataTypes.INTEGER, allowNull: false}
})

const Cabinet = sequelize.define('cabinet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    room: {type: DataTypes.INTEGER, allowNull: false},
})

const Record = sequelize.define('record', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    date: {type: DataTypes.DATE, allowNull: false},
    cabinet: {type: DataTypes.INTEGER, allowNull: false},
    user_id: {type: DataTypes.INTEGER, allowNull: false},
    doctor_id: {type: DataTypes.INTEGER, allowNull: false},
})

const Review = sequelize.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    user_name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
    rating: {type: DataTypes.INTEGER, allowNull: false}
})

Doctor.hasOne(Cabinet);
Cabinet.belongsTo(Doctor);

Doctor.hasOne(Branch);
Branch.belongsTo(Doctor);

Branch.hasOne(Ward);
Ward.belongsTo(Branch);

ServiceStaff.hasMany(Branch);
Branch.belongsTo(ServiceStaff);

User.hasMany(Record);
Record.belongsTo(User);
Doctor.hasMany(Record);
Record.belongsTo(Doctor);

module.exports = {
    User,
    Doctor,
    ServiceStaff,
    Branch,
    Ward,
    Cabinet,
    Record,
    Review
}