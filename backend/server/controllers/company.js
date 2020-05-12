const Company = require('../models').Company
const Employee = require('../models').Employee

module.exports= {

  // Create a new company
    create(req, res) {
      return Company
        .create({
          name: req.body.name,
        })
        .then(company => res.status(201).send(company))
        .catch(error => res.status(400).send(error));
    },

    // Get all company with it's employees
    list(req, res) {
      return Company
        .findAll({
          include: [{
            model: Employee,
            as: 'employees',
          }],
        })
        .then(company => res.status(200).send(company))
        .catch(error => res.status(400).send(error));
    },

    // Get a company by id
    retrieve(req, res) {
      return Company
        .findById(req.params.companyId, {
          include: [{
            model: Employees,
            as: 'employees',
          }],
        })
        .then(company => {
          if (!company) {
            return res.status(404).send({
              message: 'company Not Found',
            });
          }
          return res.status(200).send(company);
        })
        .catch(error => res.status(400).send(error));
    },

    // Delete company by id
    destroy(req, res) {
      return Company
        .findById(req.params.companyId)
        .then(company => {
          if (!company) {
            return res.status(400).send({
              message: 'company Not Found',
            });
          }
          return company
            .destroy()
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
    // Update company by id
    update(req, res) {
      return Company
        .findById(req.params.companyId, {
          include: [{
            model: Employees,
            as: 'employees',
          }],
        })
        .then(company => {
          if (!company) {
            return res.status(404).send({
              message: 'company Not Found',
            });
          }
          return company
            .update({
              name: req.body.name || company.name,
            })
            .then(() => res.status(200).send(company))  // Send back the updated company.
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
  };