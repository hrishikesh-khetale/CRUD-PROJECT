const mongoose = require("mongoose");

function toLower(str) {
  return str.toLowerCase();
}

const employeeSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    set: toLower,
    required: true,
    unique: [true, "Email already exists"]
  },
  department: {
    type: String,
    required: [true, "Please enter a department"],
  },

});

module.exports = mongoose.model("Employee", employeeSchema); 