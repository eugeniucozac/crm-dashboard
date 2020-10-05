"use strict"
module.exports = (sequelize, dataTypes) => {
  const Consultant = sequelize.define(
    "Consultant",
    {
      firstName: dataTypes.STRING,
      lastName: dataTypes.STRING,
      email: dataTypes.STRING,
      telNo: dataTypes.STRING,
      mobNo: dataTypes.STRING,
      password: dataTypes.STRING,
      password2: dataTypes.STRING,
      resetPasswordToken: dataTypes.STRING,
      resetPasswordExpires: dataTypes.DATE,
      roleId: dataTypes.INTEGER,
      title: dataTypes.STRING,
    },
    {}
  )
  Consultant.associate = function (models) {
    Consultant.belongsTo(models.RoleConsultant, {
      as: "role",
    })
    Consultant.belongsToMany(models.Message, {
      through: models.MessageConsultant,
      foreignKey: "consultantId",
      as: "messages",
    })
    Consultant.belongsToMany(models.Project, {
      through: models.ProjectAsConsultant,
      foreignKey: "consultantId",
    })
  }
  return Consultant
}
