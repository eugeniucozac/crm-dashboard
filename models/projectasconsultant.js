"use strict"
module.exports = (sequelize, dataTypes) => {
  const ProjectAsConsultant = sequelize.define(
    "ProjectAsConsultant",
    {
      consultantId: dataTypes.INTEGER,
      projectId: dataTypes.INTEGER,
    },
    {}
  )
  ProjectAsConsultant.associate = function (models) {
    // associations can be defined here
  }
  return ProjectAsConsultant
}
