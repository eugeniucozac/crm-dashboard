"use strict"
module.exports = (sequelize, dataTypes) => {
  const InventoryType = sequelize.define(
    "InventoryType",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  InventoryType.associate = function (models) {
    // associations can be defined here
  }
  return InventoryType
}
