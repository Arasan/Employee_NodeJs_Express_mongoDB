const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   age: {
      type: Number,
      required: true
   },
   birthyear: {
      type: Number,
      required: true
   }
})
module.exports = mongoose.model("employeeSchema", employeeSchema);