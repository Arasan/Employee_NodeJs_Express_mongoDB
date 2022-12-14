const employees = require("../controller/controller.js");
const express = require('express');
const router = express.Router()
const {validateField} = require('../validation/validation');

router.get('/', employees.defaultapi); // Set default API response
router.get('/employee', employees.getallemployee); // get all employee list
router.post('/employee',validateField, employees.createemployee); // create new employee && validation added
router.get('/employee/:id', employees.getbyID); // get particular emploee by id
router.put('/employee/:id', employees.updatebyID); //update particular employee
router.delete('/employee/:id', employees.deleteemployee); // delete single employee details

// Export API routes
module.exports = router;