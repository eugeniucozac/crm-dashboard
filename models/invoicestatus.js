"use strict"
module.exports = (sequelize, DataTypes) => {
  const InvoiceStatus = sequelize.define(
    "InvoiceStatus",
    {
      name: DataTypes.STRING,
    },
    {}
  )
  InvoiceStatus.associate = function (models) {
    // associations can be defined here
  }
  return InvoiceStatus
}
