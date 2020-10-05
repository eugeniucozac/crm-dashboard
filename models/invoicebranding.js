"use strict"
module.exports = (sequelize, DataTypes) => {
  const InvoiceBranding = sequelize.define(
    "InvoiceBranding",
    {
      name: DataTypes.STRING,
    },
    {}
  )
  InvoiceBranding.associate = function (models) {
    // associations can be defined here
  }
  return InvoiceBranding
}
