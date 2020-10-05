"use strict"
module.exports = (sequelize, DataTypes) => {
  const XeroToken = sequelize.define(
    "XeroToken",
    {
      name: DataTypes.STRING,
    },
    {}
  )
  XeroToken.associate = function (models) {
    // associations can be defined here
  }
  return XeroToken
}
