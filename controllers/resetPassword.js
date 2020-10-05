import { Router } from "express"
import database from "../models"
import Sequelize from "sequelize"
const Op = Sequelize.Op
const router = Router()

router.post("/", async (req, res) => {
  let errors = {}

  const { params } = req.body
  try {
    const consultant = await database.Consultant.findOne({
      where: {
        resetPasswordToken: params.resetPasswordToken,
        resetPasswordExpires: { [Op.gt]: Date.now() },
      },
    })

    if (!consultant) {
      errors.token = "Password reset link is invalid or has expired."
      return res.status(404).json(errors)
    }
    return res.status(201).json(consultant)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

export default router
