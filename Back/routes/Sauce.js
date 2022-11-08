const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer");
const ctrl = require("../controllers/Sauce");

router.post("/", auth, multer, ctrl.createSauce);
router.get("/", auth, ctrl.getAllSauce);
router.put("/:id", auth, multer, ctrl.editSauce);
router.delete("/:id", auth, ctrl.deleteSauce);
router.get("/:id", auth, ctrl.getOneSauce);

module.exports = router;
