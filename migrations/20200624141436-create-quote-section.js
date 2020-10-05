"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable("QuoteSections", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.dataTypes.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        name: {
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.INTEGER,
        },
        quoteId: {
          type: Sequelize.UUID,
          onDelete: "CASCADE",
          references: {
            model: "Quotes",
            key: "id",
            as: "quoteId",
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
    return queryInterface.dropTable("QuoteSections")
  },
}
