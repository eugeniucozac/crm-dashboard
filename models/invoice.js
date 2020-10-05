"use strict"
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    "Invoice",
    {
      issueDate: DataTypes.DATE,
      paymentDue: DataTypes.DATE,
      number: DataTypes.STRING,
      reference: DataTypes.STRING,
      brandingId: DataTypes.INTEGER,
      taxId: DataTypes.INTEGER,
      quoteId: DataTypes.UUID,
      statusId: DataTypes.INTEGER,
    },
    {}
  )
  Invoice.associate = function (models) {
    Invoice.belongsTo(models.InvoiceTax, { as: "tax" })
    Invoice.belongsTo(models.InvoiceBranding, { as: "branding" })
    Invoice.belongsTo(models.Quote, { as: "quote" })
    Invoice.belongsTo(models.InvoiceStatus, { as: "status" })
  }
  return Invoice
}
