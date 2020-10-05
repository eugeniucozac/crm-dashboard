"use strict"
module.exports = (sequelize, DataTypes) => {
  const InvoiceTax = sequelize.define(
    "InvoiceTax",
    {
      name: DataTypes.STRING,
    },
    {}
  )
  InvoiceTax.associate = function (models) {
    // associations can be defined here
  }
  return InvoiceTax
}
