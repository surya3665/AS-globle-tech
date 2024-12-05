const { createDetails, deleteDetails, updateDetails } = require("../controllers/edit.controller")
const { protectRoute } = require("../middleware/protectRoute");

const router = require("express").Router();

router.post("/createDetail",protectRoute, createDetails);
router.delete("/deleteDetail/:id",protectRoute,deleteDetails)
router.put("/updateDetail/:id",protectRoute,updateDetails)

module.exports=router