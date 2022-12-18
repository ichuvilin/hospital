const Router = require('express')
const router = new Router();
const doctorController = require('../controllers/doctorController')
const checkRole = require("../middleware/checkRoleMiddleware")

router.post('/add', checkRole("ADMIN"), doctorController.create)
router.get("/", doctorController.getAll)

module.exports = router