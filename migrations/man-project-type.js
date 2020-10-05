"use strict"
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Projects", "addressBookId", {
      type: Sequelize.STRING,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Projects", "addressBookId", {
      type: Sequelize.STRING,
    })
  },
}
