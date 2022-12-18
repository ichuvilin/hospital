const Router = require('express')
const router = new Router();
const recordController = require('../controllers/recordController')

router.post('/add', recordController.create)
router.get("/:id", recordController.getAllRecordForOneUser)

module.exports = router;