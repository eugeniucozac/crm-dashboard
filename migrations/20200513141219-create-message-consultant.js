"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("MessageConsultants", {
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
      messageId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Messages",
          key: "id",
          as: "messageId",
          onDelete: "cascade",
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
    return queryInterface.dropTable("MessageConsultants")
  },
}
