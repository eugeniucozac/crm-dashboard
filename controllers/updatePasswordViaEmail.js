import bcrypt from "bcryptjs"
import Sequelize from "sequelize"
import { Router } from "express"
import database from "../models"
const Op = Sequelize.Op
const BCRYPT_SALT_ROUNDS = 12
const router = Router()

router.put("/", (req, res) => {
  database.Engineer.findOne({
    where: {
      email: req.body.email,
      resetPasswordToken: req.body.resetPasswordToken,
      resetPasswordExpires: {
        [Op.gt]: Date.now(),
      },
    },
  }).then(engineer => {
    if (engineer == null) {
      res.status(400).json("Password reset link is invalid or has expired")
    } else if (engineer != null) {
      bcrypt
        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then(hashedPassword => {
          engineer.update({
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null,
          })
        })
        .then(() => {
          res.status(201).json("Password was updated")
        })
    } else {
      res.status(400).json("This user does not exist")
    }
  })
})

export default router
