"use strict"
module.exports = (sequelize, dataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      description: dataTypes.TEXT,
      addressBookId: dataTypes.UUID,
      consultantId: dataTypes.INTEGER,
    },
    {}
  )
  Project.associate = function (models) {
    Project.belongsToMany(models.Consultant, {
      through: models.ProjectAsConsultant,
      foreignKey: "projectId",
      as: "consultants",
    })
    Project.belongsTo(models.Consultant, { as: "consultant" })
    Project.hasOne(models.ProjectSite, {
      foreignKey: "projectId",
      as: "site",
      onDelete: "cascade",
      hooks: true,
    })
    Project.belongsTo(models.AddressBook, {
      as: "addressBook",
    })
    Project.hasMany(models.ProjectComment, {
      foreignKey: "projectId",
      as: "comments",
      onDelete: "cascade",
      hooks: true,
    })
    Project.belongsToMany(models.QuoteServicePrice, {
      through: models.ProjectAsServicePrice,
      foreignKey: "projectId",
      as: "servicePrices",
    })
    Project.hasMany(models.ProjectHistory, {
      foreignKey: "projectId",
      as: "history",
      onDelete: "cascade",
      hooks: true,
    })
  }
  return Project
}
