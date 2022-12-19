const Router = require('express')
const router = new Router();

const userRouter = require('./userRouter')
const doctorRouter = require('./doctorRouter')
const reviewRouter = require('./reviewRouter')
const recordRouter = require('./recordRouter')
const branchRouter = require('./branchRouter')
const wardRouter = require("./wardRouter")

router.use("/user", userRouter)
router.use('/doctor', doctorRouter)
router.use('/review', reviewRouter)
router.use('/record', recordRouter)
router.use('/branch', branchRouter)
router.use('/ward', wardRouter)


module.exports = router