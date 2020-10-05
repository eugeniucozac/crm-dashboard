"use strict"
module.exports = (sequelize, dataTypes) => {
  const MessageStatus = sequelize.define(
    "MessageStatus",
    {
      name: dataTypes.STRING,
    },
    {}
  )
  MessageStatus.associate = function (models) {
    // associations can be defined here
  }
  return MessageStatus
}
