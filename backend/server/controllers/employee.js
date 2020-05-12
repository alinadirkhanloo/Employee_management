const Employee = require("../models").Employee;

module.exports = {
  // Create a new employee
  create(req, res) {
    return Employee.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      companyId: req.body.companyId,
    })
      .then((employee) => res.status(201).send(employee))
      .catch((error) => res.status(400).send(error));
  },

  // Get all employees
  list(req, res) {
    return Employee.findAll()
      .then((employee) => res.status(200).send(employee))
      .catch((error) => res.status(400).send(error));
  },

  // Get a employee by id
  retrieve(req, res) {
    return Employee.findByPK(req.params.employeeId)
      .then((employee) => {
        if (!employee) {
          return res.status(404).send({
            message: "employee Not Found",
          });
        }
        return res.status(200).send(employee);
      })
      .catch((error) => res.status(400).send(error));
  },

  // Delete a employee by id
  destroy(req, res) {
    return Employee.find({
      where: {
        id: req.params.employeeId,
        companyId: req.params.companyId,
      },
    })
      .then((employee) => {
        if (!employee) {
          return res.status(404).send({
            message: "employee Not Found",
          });
        }

        return employee
          .destroy()
          .then(() => res.status(204).send("employee deleted!!"))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
// Update employee by id
  update(req, res) {
    return Employee.find({
      where: {
        id: req.params.employeeId,
        companyId: req.params.companyId,
      },
    })
      .then((employee) => {
        if (!employee) {
          return res.status(404).send({
            message: "employee Not Found",
          });
        }

        return employee
          .update({
            first_name: req.body.first_name || employee.first_name,
            last_name: req.body.last_name || employee.last_name,
          })
          .then((updated) => res.status(200).send(updated))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  
};
