"use strict"
module.exports = (sequelize, dataTypes) => {
  const ProjectHistory = sequelize.define(
    "ProjectHistory",
    {
      statusId: dataTypes.INTEGER,
      consultantId: dataTypes.INTEGER,
      projectId: dataTypes.INTEGER,
    },
    {}
  )
  ProjectHistory.associate = function (models) {
    ProjectHistory.belongsTo(models.Consultant, { as: "consultant" })
    ProjectHistory.belongsTo(models.ProjectHistoryStatus, { as: "status" })
  }
  return ProjectHistory
}
