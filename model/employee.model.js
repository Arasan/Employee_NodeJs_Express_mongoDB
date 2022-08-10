const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   phone: {
      type: Number,
      required: true
   },
   gender: {
    type: String,
    required: true
 },
 create_date: {
   type: Date,
   default: Date.now
}
})
module.exports = mongoose.model("employeeSchema", employeeSchema);