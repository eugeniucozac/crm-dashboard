"use strict"
module.exports = (sequelize, dataTypes) => {
  const QuoteSection = sequelize.define(
    "QuoteSection",
    {
      name: dataTypes.STRING,
      quoteId: dataTypes.UUID,
    },
    {}
  )
  QuoteSection.associate = function (models) {
    QuoteSection.hasMany(models.QuoteSectionService, {
      foreignKey: "sectionId",
      as: "services",
      onDelete: "cascade",
      hooks: true,
    })
  }
  return QuoteSection
}
