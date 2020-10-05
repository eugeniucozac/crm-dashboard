"use strict"
module.exports = (sequelize, dataTypes) => {
  const Hardware = sequelize.define(
    "Hardware",
    {
      typeId: dataTypes.INTEGER,
      modelId: dataTypes.INTEGER,
      serialNumber: dataTypes.STRING,
      isFaulty: dataTypes.BOOLEAN,
    },
    {}
  )
  Hardware.associate = function (models) {
    Hardware.belongsTo(models.InventoryType, {
      as: "type",
    })
    Hardware.belongsTo(models.InventoryModel, {
      as: "model",
    })
    Hardware.belongsToMany(models.InventoryKit, {
      through: models.HardwareKit,
      foreignKey: "hardwareId",
    })
  }
  return Hardware
}
