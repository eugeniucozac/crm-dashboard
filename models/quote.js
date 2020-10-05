"use strict"
module.exports = (sequelize, dataTypes) => {
  const Quote = sequelize.define(
    "Quote",
    {
      name: dataTypes.STRING,
      projectId: dataTypes.INTEGER,
      statusId: dataTypes.INTEGER,
      converted: dataTypes.BOOLEAN,
      templateName: dataTypes.STRING,
      invoiced: dataTypes.BOOLEAN,
      paidAmount: dataTypes.INTEGER,
    },
    {}
  )
  Quote.associate = function (models) {
    Quote.hasMany(models.QuoteSection, {
      foreignKey: "quoteId",
      as: "sections",
      onDelete: "cascade",
      hooks: true,
    })
    Quote.belongsTo(models.QuoteStatus, { as: "status" })
  }
  return Quote
}
