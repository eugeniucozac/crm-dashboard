"use strict"
module.exports = (sequelize, dataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      issueId: dataTypes.INTEGER,
      fromConsultantId: dataTypes.INTEGER,
      title: dataTypes.STRING,
      message: dataTypes.TEXT,
      statusId: dataTypes.INTEGER,
    },
    {}
  )
  Message.associate = function (models) {
    Message.belongsTo(models.MessageStatus, { as: "status" })
    Message.belongsToMany(models.Consultant, {
      through: models.MessageConsultant,
      foreignKey: "messageId",
      as: "toConsultants",
      onDelete: "cascade",
    })
    Message.belongsTo(models.Consultant, { as: "fromConsultant" })
  }
  return Message
}
