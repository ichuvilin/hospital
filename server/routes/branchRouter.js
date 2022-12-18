const Router = require('express')
const router = new Router();
const branchController = require('../controllers/branchController')
const checkRole = require("../middleware/checkRoleMiddleware")

router.post('/add', checkRole("ADMIN"), branchController.create)

module.exports = router