"use strict"
module.exports = (sequelize, DataTypes) => {
  const InvoicePayment = sequelize.define(
    "InvoicePayment",
    {
      amount: DataTypes.INTEGER,
      invoiceId: DataTypes.UUID,
    },
    {}
  )
  InvoicePayment.associate = function (models) {
    // associations can be defined here
  }
  return InvoicePayment
}
