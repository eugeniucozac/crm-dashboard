"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("HardwareKits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kitId: {
        type: Sequelize.INTEGER,
        references: {
          model: "InventoryKits",
          key: "id",
          as: "kitId",
        },
        allowNull: false,
      },
      hardwareId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Hardware",
          key: "id",
          as: "hardwareId",
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
    return queryInterface.dropTable("HardwareKits")
  },
}
