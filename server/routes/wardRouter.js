const Router = require('express')
const router = new Router();
const wardController = require('../controllers/wardController')
const checkRole = require("../middleware/checkRoleMiddleware")


router.post('/add', checkRole("ADMIN"), wardController.create)

module.exports = router;