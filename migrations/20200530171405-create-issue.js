"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Issues", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      consultantId: {
        type: Sequelize.INTEGER,
      },
      hardwareId: {
        type: Sequelize.INTEGER,
      },
      hardwareName: {
        type: Sequelize.STRING,
      },
      statusId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "IssueStatuses",
          },
          key: "id",
        },
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "IssueCategories",
          },
          key: "id",
        },
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.TEXT,
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Issues")
  },
}
