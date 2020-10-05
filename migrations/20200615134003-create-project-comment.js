"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable("ProjectComments", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.dataTypes.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        content: {
          type: Sequelize.TEXT,
        },
        consultantId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "Consultants",
            },
            key: "id",
          },
          allowNull: false,
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
    return queryInterface.dropTable("ProjectComments")
  },
}
