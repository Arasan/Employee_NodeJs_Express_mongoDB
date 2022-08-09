const employees = require("../controller/controller.js");
const express = require('express');
const router = express.Router()

router.get('/employee',employees.getallemployee);
router.post('/employee',employees.createemployee);
router.get('/employee/:id',employees.getbyID);
router.put('/employee/:id',employees.updatebyID);
router.delete('/employee/:id',employees.deleteemployee);

module.exports = router;
