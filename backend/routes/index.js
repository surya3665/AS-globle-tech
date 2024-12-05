const router = require("express").Router()
const authRoutes = require("./auth.route")
const editRoutes = require ("./edit.route")


router.use("/auth", authRoutes)
router.use("/edit",editRoutes)

module.exports = router