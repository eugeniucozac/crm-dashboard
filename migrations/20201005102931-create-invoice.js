"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then(() => {
      return queryInterface.createTable("Invoices", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        issueDate: {
          type: Sequelize.DATE,
        },
        paymentDue: {
          type: Sequelize.DATE,
        },
        number: {
          type: Sequelize.STRING,
        },
        reference: {
          type: Sequelize.STRING,
        },
        brandingId: {
          type: Sequelize.INTEGER,
        },
        taxId: {
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
        statusId: {
          type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("Invoices")
  },
}
