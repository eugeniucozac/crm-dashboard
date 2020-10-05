"use strict"
module.exports = (sequelize, dataTypes) => {
  const Issue = sequelize.define(
    "Issue",
    {
      consultantId: dataTypes.INTEGER,
      hardwareId: dataTypes.INTEGER,
      hardwareName: dataTypes.STRING,
      statusId: dataTypes.INTEGER,
      categoryId: dataTypes.INTEGER,
      title: dataTypes.STRING,
      message: dataTypes.TEXT,
    },
    {}
  )
  Issue.associate = function (models) {
    Issue.belongsTo(models.IssueStatus, { as: "status" })
    Issue.belongsTo(models.IssueCategory, { as: "category" })
    Issue.belongsTo(models.Consultant, { as: "consultant" })
    Issue.hasMany(models.Message, {
      foreignKey: "issueId",
      as: "messages",
      onDelete: "cascade",
    })
  }
  return Issue
}
