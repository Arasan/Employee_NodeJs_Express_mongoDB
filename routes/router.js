const employees = require("../controller/controller.js");
const express = require('express');
const router = express.Router()

router.get('/employee', employees.getallemployee); // get all employee list
router.post('/employee', employees.createemployee); // create new employee
router.get('/employee/:id', employees.getbyID); // get particular emploee by id
router.put('/employee/:id', employees.updatebyID); //update particular employee
router.delete('/employee/:id', employees.deleteemployee); // delete single employee details

module.exports = router;