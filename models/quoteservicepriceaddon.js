"use strict"
module.exports = (sequelize, dataTypes) => {
  const QuoteServicePriceAddon = sequelize.define(
    "QuoteServicePriceAddon",
    {
      name: dataTypes.STRING,
      price: dataTypes.INTEGER,
      content: dataTypes.TEXT,
      servicePriceId: dataTypes.INTEGER,
    },
    {}
  )
  QuoteServicePriceAddon.associate = function (models) {
    // associations can be defined here
  }
  return QuoteServicePriceAddon
}
