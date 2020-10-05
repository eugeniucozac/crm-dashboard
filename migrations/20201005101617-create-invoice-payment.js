"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then(() => {
      return queryInterface.createTable("InvoicePayments", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        amount: {
          type: Sequelize.INTEGER,
        },
        invoiceId: {
          type: Sequelize.UUID,
          onDelete: "CASCADE",
          references: {
            model: "Invoices",
            key: "id",
            as: "invoiceId",
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
    return queryInterface.dropTable("InvoicePayments")
  },
}
