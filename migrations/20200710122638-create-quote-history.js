"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable("QuoteHistories", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.dataTypes.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        fileName: {
          type: Sequelize.STRING,
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
    return queryInterface.dropTable("QuoteHistories")
  },
}
