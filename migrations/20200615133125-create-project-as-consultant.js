"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ProjectAsConsultants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      consultantId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Consultants",
          key: "id",
          as: "consultantId",
        },
        allowNull: false,
      },
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Projects",
          key: "id",
          as: "projectId",
        },
        allowNull: false,
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
    return queryInterface.dropTable("ProjectAsConsultants")
  },
}
