"use strict"
module.exports = (sequelize, dataTypes) => {
  const QuoteServicePrice = sequelize.define(
    "QuoteServicePrice",
    {
      name: dataTypes.STRING,
      price: dataTypes.INTEGER,
      content: dataTypes.TEXT,
    },
    {}
  )
  QuoteServicePrice.associate = function (models) {
    QuoteServicePrice.hasMany(models.QuoteServicePriceAddon, {
      foreignKey: "servicePriceId",
      as: "addons",
      onDelete: "cascade",
      hooks: true,
    })
    QuoteServicePrice.belongsToMany(models.Project, {
      through: models.ProjectAsServicePrice,
      foreignKey: "servicePriceId",
    })
  }
  return QuoteServicePrice
}
