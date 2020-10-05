"use strict"
module.exports = (sequelize, dataTypes) => {
  const ProjectAsServicePrice = sequelize.define(
    "ProjectAsServicePrice",
    {
      servicePriceId: dataTypes.INTEGER,
      projectId: dataTypes.INTEGER,
    },
    {}
  )
  ProjectAsServicePrice.associate = function (models) {
    // associations can be defined here
  }
  return ProjectAsServicePrice
}
