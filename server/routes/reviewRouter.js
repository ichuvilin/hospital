const Router = require('express')
const router = new Router();
const reviewController = require('../controllers/reviewController')

router.post("/add", reviewController.create)
router.get('/', reviewController.get)

module.exports = router