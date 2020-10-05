"use strict"
module.exports = (sequelize, dataTypes) => {
  const QuoteSectionService = sequelize.define(
    "QuoteSectionService",
    {
      price: dataTypes.INTEGER,
      sectionId: dataTypes.UUID,
      servicePriceId: dataTypes.INTEGER,
    },
    {}
  )
  QuoteSectionService.associate = function (models) {
    QuoteSectionService.belongsTo(models.QuoteServicePrice, { as: "servicePrice" })
  }
  return QuoteSectionService
}
