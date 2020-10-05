"use strict"
module.exports = (sequelize, dataTypes) => {
  const InventoryManufacture = sequelize.define(
    "InventoryManufacture",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  InventoryManufacture.associate = function (models) {
    InventoryManufacture.hasMany(models.InventoryModel, {
      foreignKey: "manufactureId",
      as: "models",
    })
  }
  return InventoryManufacture
}
