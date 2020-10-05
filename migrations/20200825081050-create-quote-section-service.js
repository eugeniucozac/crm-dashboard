"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable("QuoteSectionServices", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.dataTypes.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        price: {
          type: Sequelize.INTEGER,
        },
        sectionId: {
          type: Sequelize.UUID,
          onDelete: "CASCADE",
          references: {
            model: "QuoteSections",
            key: "id",
            as: "sectionId",
          },
        },
        servicePriceId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "QuoteServicePrices",
            },
            key: "id",
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
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("QuoteSectionServices")
  },
}
