const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authorsController");

router.route("/").get(authorsController.getAllAuthors);

module.exports = router;