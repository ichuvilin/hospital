const Router = require('express')
const router = new Router();
const cabinetController = require('../controllers/cabinetController')
const checkRole = require("../middleware/checkRoleMiddleware")

router.post('/add', checkRole("ADMIN"), cabinetController.create)
router.get('/', cabinetController.getAll)

module.exports = router;