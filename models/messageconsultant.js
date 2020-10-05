"use strict"
module.exports = (sequelize, dataTypes) => {
  const MessageConsultant = sequelize.define(
    "MessageConsultant",
    {
      consultantId: dataTypes.INTEGER,
      messageId: dataTypes.INTEGER,
    },
    {}
  )
  MessageConsultant.associate = function (models) {
    // associations can be defined here
  }
  return MessageConsultant
}
