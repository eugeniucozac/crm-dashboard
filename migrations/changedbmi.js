"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.addColumn(
        "ProjectSites",
        "postCode",
        {
          type: Sequelize.STRING,
        },
        { transaction }
      )

      await queryInterface.addColumn(
        "ProjectSites",
        "city",
        {
          type: Sequelize.STRING,
        },
        { transaction }
      )

      await queryInterface.addColumn(
        "ProjectSites",
        "country",
        {
          type: Sequelize.STRING,
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
      await queryInterface.removeColumn("ProjectSites", "postCode", { transaction })
      await queryInterface.removeColumn("ProjectSites", "city", { transaction })
      await queryInterface.removeColumn("ProjectSites", "country", { transaction })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },
}
