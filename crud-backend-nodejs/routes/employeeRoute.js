const express = require("express");
const router = express.Router();
const { getAllEmployee, addEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeController");


router.route('/emp').get(getAllEmployee)

router.route('/emp').post(addEmployee)

router.route('/emp').put(updateEmployee)

router.route('/emp/:id').delete(deleteEmployee)

module.exports = router;