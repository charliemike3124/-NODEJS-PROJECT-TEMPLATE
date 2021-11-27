const express = require("express");
const exampleController = require("../controllers/exampleController");

const router = express.Router();

router.get('/getExampleRequest/:exampleParam', exampleController.getExampleRequest);

module.exports = router;