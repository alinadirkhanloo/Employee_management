const companyController = require("../controllers").companies;
const employeeController = require("../controllers").employees;

const express = require("express");
const router = express.Router();

router.post("/courses", (req, res) => {
  console.log(req.body);
});


router.post("/companies", companyController.create);
router.get("/companies", companyController.list);

router.post("/employees",employeeController.create);
router.get("/employees", employeeController.list);
router.get("/employees/:employeeId", employeeController.list);
router.delete("/employees/:employeeId", employeeController.destroy);
router.put("/employees/:employeeId", employeeController.update)
module.exports = router;
