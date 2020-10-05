"use strict"
module.exports = (sequelize, dataTypes) => {
  const ContactUser = sequelize.define(
    "ContactUser",
    {
      firstName: dataTypes.STRING,
      lastName: dataTypes.STRING,
      email1: dataTypes.STRING,
      email2: dataTypes.STRING,
      phoneNumber1: dataTypes.STRING,
      phoneNumber2: dataTypes.STRING,
      addressBookId: dataTypes.UUID,
      roleId: dataTypes.INTEGER,
    },
    {}
  )
  ContactUser.associate = function (models) {
    ContactUser.belongsTo(models.RoleAddressUser, {
      as: "role",
    })
  }
  return ContactUser
}
