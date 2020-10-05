"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("QuoteServicePrices", "name", {
      type: Sequelize.STRING,
      unique: true,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("QuoteServicePrices", "name", {
      type: Sequelize.STRING,
      unique: true,
    })
  },
}
