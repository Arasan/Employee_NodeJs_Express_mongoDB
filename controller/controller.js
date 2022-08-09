const modelEmployee = require("../model/employee.model");
/* get all employee details */
exports.getallemployee = function(req, res) {
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
exports.createemployee = function(req, res) {
    const savedetails = new modelEmployee({
        name: req.body.name,
        age: req.body.age,
        birthyear: req.body.birthyear
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
exports.getbyID = function(req, res) {
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
exports.updatebyID = function(req, res) {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
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
exports.deleteemployee = function(req, res) {
    const id = req.params.id;
   modelEmployee.findByIdAndDelete(id).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting the employee."
            });
        });
}