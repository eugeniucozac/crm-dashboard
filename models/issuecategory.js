"use strict"
module.exports = (sequelize, dataTypes) => {
  const IssueCategory = sequelize.define(
    "IssueCategory",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  IssueCategory.associate = function (models) {
    // associations can be defined here
  }
  return IssueCategory
}
