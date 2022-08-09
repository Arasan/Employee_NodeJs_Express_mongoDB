const employees = require("../controller/controller.js");
const express = require('express');
const router = express.Router()

router.get('/employee',employees.getallemployee);
router.post('/employee',employees.createemployee);

module.exports = router;
