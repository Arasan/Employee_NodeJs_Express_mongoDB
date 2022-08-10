const modelEmployee = require("../model/employee.model");

// Set default API response
exports.defaultapi = function (req, res) {   
    res.json(
        {status: "API Its Working",
         message: 'Welcome to MEAN project'});
 }

/* get all employee details */
exports.getallemployee = function (req, res) {
   // find() to get all records
   modelEmployee.find().then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send({
            message: err.message || "Some error occurred while getting the employee."
         });
      });
}

/* create new  employee details */
exports.createemployee = function (req, res) {
   // save() to save single payload
   const savedetails = new modelEmployee({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender
   })
   try {
      savedetails.save();
      res.status(200).json(savedetails);
   } catch (error) {
      res.status(400).json({
         message: error.message
      })
   }
}

/* get employee details by ID */
exports.getbyID = function (req, res) {
   // findById() get single record
   modelEmployee.findById(req.params.id).then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send({
            message: err.message || "Some error occurred while getting the employee."
         });
      });
}

/* update employee details by ID */
exports.updatebyID = function (req, res) {
   const id = req.params.id;
   const updatedData = req.body;
   const options = {
      new: true
   };
   // findByIdAndUpdate() to update single record
   modelEmployee.findByIdAndUpdate(id, updatedData, options).then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send({
            message: err.message || "Some error occurred while getting the employee."
         });
      });
}
/* delete employee details by ID */
exports.deleteemployee = function (req, res) {
   const id = req.params.id;
   // findByIdAndDelete() to delete single record
   modelEmployee.findByIdAndDelete(id).then(data => {
         res.send(`document deleted successfully ${data.name}`);
      })
      .catch(err => {
         res.status(500).send({
            message: err.message || "Some error occurred while getting the employee."
         });
      });
}