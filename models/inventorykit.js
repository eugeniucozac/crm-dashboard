"use strict"
module.exports = (sequelize, dataTypes) => {
  const InventoryKit = sequelize.define(
    "InventoryKit",
    {
      name: dataTypes.STRING,
      calibrationNumber: dataTypes.STRING,
      calibrationCurDate: dataTypes.DATE,
      calibrationDueDate: dataTypes.DATE,
      isFaulty: dataTypes.BOOLEAN,
    },
    {}
  )
  InventoryKit.associate = function (models) {
    InventoryKit.belongsToMany(models.Hardware, {
      through: models.HardwareKit,
      foreignKey: "kitId",
      as: "hardwares",
    })
  }
  return InventoryKit
}
