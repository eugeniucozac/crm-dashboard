"use strict"
module.exports = (sequelize, dataTypes) => {
  const RoleAddressUser = sequelize.define(
    "RoleAddressUser",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  RoleAddressUser.associate = function (models) {
    // associations can be defined here
  }
  return RoleAddressUser
}
