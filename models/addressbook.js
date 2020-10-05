"use strict"
module.exports = (sequelize, dataTypes) => {
  const AddressBook = sequelize.define(
    "AddressBook",
    {
      companyName: dataTypes.STRING,
      addressName: dataTypes.STRING,
      postCode: dataTypes.STRING,
      city: dataTypes.STRING,
      country: dataTypes.STRING,
    },
    {}
  )
  AddressBook.associate = function (models) {
    AddressBook.hasMany(models.ContactUser, {
      foreignKey: "addressBookId",
      as: "users",
      onDelete: "cascade",
      hooks: true,
    })
  }
  return AddressBook
}
