"use strict"
module.exports = (sequelize, dataTypes) => {
  const IssueStatus = sequelize.define(
    "IssueStatus",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  IssueStatus.associate = function (models) {
    // associations can be defined here
  }
  return IssueStatus
}
