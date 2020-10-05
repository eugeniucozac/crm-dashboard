"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ProjectAsServicePrices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      servicePriceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "QuoteServicePrices",
          key: "id",
          as: "servicePriceId",
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
    return queryInterface.dropTable("ProjectAsServicePrices")
  },
}
