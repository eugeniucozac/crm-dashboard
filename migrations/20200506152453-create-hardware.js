"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Hardware", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "InventoryTypes",
          },
          key: "id",
        },
        allowNull: false,
      },
      modelId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "InventoryModels",
          },
          key: "id",
        },
        allowNull: false,
      },
      serialNumber: {
        type: Sequelize.STRING,
      },
      isFaulty: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable("Hardware")
  },
}
