const modelEmployee = require("../model/employee.model");

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