"use strict"
module.exports = (sequelize, dataTypes) => {
  const ProjectComment = sequelize.define(
    "ProjectComment",
    {
      content: dataTypes.TEXT,
      consultantId: dataTypes.INTEGER,
      projectId: dataTypes.INTEGER,
    },
    {}
  )
  ProjectComment.associate = function (models) {
    ProjectComment.belongsTo(models.Consultant, { as: "consultant" })
  }
  return ProjectComment
}
