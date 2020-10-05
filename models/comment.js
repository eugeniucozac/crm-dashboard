"use strict"
module.exports = (sequelize, dataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      postId: dataTypes.INTEGER,
      comment: dataTypes.TEXT,
      userId: dataTypes.INTEGER,
    },
    {}
  )
  Comment.associate = function (models) {
    // associations can be defined here
  }
  return Comment
}
