"use strict"
module.exports = (sequelize, dataTypes) => {
  const QuoteHistory = sequelize.define(
    "QuoteHistory",
    {
      fileName: dataTypes.STRING,
      quoteId: dataTypes.UUID,
    },
    {}
  )
  QuoteHistory.associate = function (models) {
    // associations can be defined here
  }
  return QuoteHistory
}
