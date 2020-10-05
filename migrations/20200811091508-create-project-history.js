"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable("ProjectHistories", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.dataTypes.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        statusId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "ProjectHistoryStatuses",
            },
            key: "id",
          },
          allowNull: false,
          defaultValue: "1",
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
    return queryInterface.dropTable("ProjectHistories")
  },
}
