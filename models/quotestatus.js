"use strict"
module.exports = (sequelize, dataTypes) => {
  const QuoteStatus = sequelize.define(
    "QuoteStatus",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  QuoteStatus.associate = function (models) {
    // associations can be defined here
  }
  return QuoteStatus
}
