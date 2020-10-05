"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable("ContactUsers", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.dataTypes.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
        },
        firstName: {
          type: Sequelize.STRING,
        },
        lastName: {
          type: Sequelize.STRING,
        },
        email1: {
          type: Sequelize.STRING,
        },
        email2: {
          type: Sequelize.STRING,
        },
        phoneNumber1: {
          type: Sequelize.STRING,
        },
        phoneNumber2: {
          type: Sequelize.STRING,
        },
        addressBookId: {
          type: Sequelize.UUID,
          onDelete: "CASCADE",
          references: {
            model: "AddressBooks",
            key: "id",
            as: "addressBookId",
          },
        },
        roleId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: "RoleAddressUsers",
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
    return queryInterface.dropTable("ContactUsers")
  },
}
