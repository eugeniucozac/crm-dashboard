"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.removeColumn("QuoteSections", "price", { transaction })
      await queryInterface.removeColumn("QuoteSections", "servicePriceId", { transaction })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.removeColumn("QuoteSections", "price", { transaction })
      await queryInterface.removeColumn("QuoteSections", "servicePriceId", { transaction })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },
}
