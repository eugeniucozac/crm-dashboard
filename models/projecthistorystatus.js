"use strict"
module.exports = (sequelize, dataTypes) => {
  const ProjectHistoryStatus = sequelize.define(
    "ProjectHistoryStatus",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  ProjectHistoryStatus.associate = function (models) {
    // associations can be defined here
  }
  return ProjectHistoryStatus
}
