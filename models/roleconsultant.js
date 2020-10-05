"use strict"
module.exports = (sequelize, dataTypes) => {
  const RoleConsultant = sequelize.define(
    "RoleConsultant",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  RoleConsultant.associate = function (models) {
    // associations can be defined here
  }
  return RoleConsultant
}
