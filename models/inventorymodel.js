"use strict"
module.exports = (sequelize, dataTypes) => {
  const InventoryModel = sequelize.define(
    "InventoryModel",
    {
      name: dataTypes.STRING,
      manufactureId: dataTypes.INTEGER,
    },
    {}
  )
  InventoryModel.associate = function (models) {
    InventoryModel.belongsTo(models.InventoryManufacture, {
      as: "manufacture",
    })
  }
  return InventoryModel
}
