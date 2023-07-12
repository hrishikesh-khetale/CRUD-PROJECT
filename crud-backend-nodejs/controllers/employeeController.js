const Employee = require("../models/employeeModel")

exports.getAllEmployee = async (req, res) => {
  try {
    let data = await Employee.find();
    res.status(200).json({ success: true, data: data })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addEmployee = async (req, res) => {
  try {

    const data = new Employee({
      empName: req.body.empName,
      email: req.body.email,
      department: req.body.department
    });
    await data.save()
      .then((result) => { res.json({ success: true, data: result }) });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const data = await Employee.findOne({ email: req.body.email })
    console.log(data)

    const filter = { email: req.body.email };
    const update = {
      empName: req.body.empName,
      email: req.body.email,
      department: req.body.department
    };

    const result = await Employee.findOneAndUpdate(filter, update);
    res.status(200).json({ success: true, data: result })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedModel = await Employee.findByIdAndDelete(id);
    if (!deletedModel) {
      return res.status(404).json({ message: 'data not found' });
    }
    return res.json({ message: 'data deleted successfully' });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}


