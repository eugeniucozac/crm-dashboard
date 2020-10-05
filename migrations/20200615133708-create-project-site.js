"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable("ProjectSites", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.dataTypes.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        phoneNumber: {
          type: Sequelize.STRING,
        },
        addressName: {
          type: Sequelize.STRING,
        },
        postCode: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        projectId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: "CASCADE",
          references: {
            model: "Projects",
            key: "id",
            as: "projectId",
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ProjectSites")
  },
}
