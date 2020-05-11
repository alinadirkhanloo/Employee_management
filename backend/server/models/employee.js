"use strict";
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Employee.associate = function (models) {
    // associations can be defined here
    Employee.belongsTo(models.Company, {
      foreignKey: 'company_id',
      onDelete: 'CASCADE',
    });
  };
  return Employee;
};
