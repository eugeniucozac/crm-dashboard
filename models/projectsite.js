"use strict"
module.exports = (sequelize, dataTypes) => {
  const ProjectSite = sequelize.define(
    "ProjectSite",
    {
      phoneNumber: dataTypes.STRING,
      addressName: dataTypes.STRING,
      postCode: dataTypes.STRING,
      city: dataTypes.STRING,
      country: dataTypes.STRING,
      projectId: dataTypes.INTEGER,
    },
    {}
  )
  ProjectSite.associate = function (models) {
    // associations can be defined here
  }
  return ProjectSite
}
