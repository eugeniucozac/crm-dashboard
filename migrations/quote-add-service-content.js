"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.addColumn(
        "QuoteServicePrices",
        "content",
        {
          type: Sequelize.TEXT,
        },
        { transaction }
      )

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.removeColumn("QuoteServicePrices", "content", { transaction })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },
}
