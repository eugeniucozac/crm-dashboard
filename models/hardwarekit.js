"use strict"
module.exports = (sequelize, dataTypes) => {
  const HardwareKit = sequelize.define(
    "HardwareKit",
    {
      kitId: dataTypes.INTEGER,
      hardwareId: dataTypes.INTEGER,
    },
    {}
  )
  HardwareKit.associate = function (models) {
    // associations can be defined here
  }
  return HardwareKit
}
