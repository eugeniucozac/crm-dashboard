import { Router } from "express"
import crypto from "crypto"
import database from "../models"
import validateForgotInput from "../validation/forgot"
import nodemailerMailgun from "../utils/mailgun"
const router = Router()

router.post("/", async (req, res) => {
  const { email } = req.body

  const { errors, isValid } = validateForgotInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  try {
    const consultant = await database.Consultant.findOne({
      include: [
        {
          model: database.RoleConsultant,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
      where: { email },
    })

    if (!consultant) {
      errors.email = "Email with this user does not exists"
      return res.status(400).json(errors)
    } else if (consultant.role.dataValues.name.toLowerCase() == "disabled") {
      errors.email = "Your account is disabled"
      return res.status(400).json(errors)
    } else {
      const token = crypto.randomBytes(20).toString("hex")

      consultant.update({
        resetPasswordToken: token,
        resetPasswordExpires: Date.now() + 300000,
      })

      nodemailerMailgun.sendMail({
        to: email,
        from: "ec@kpacoustics.com",
        subject: "Password reset",
        text:
          "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
          "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
          `http://${req.headers.host}/reset/${token}\n\n` +
          "If you did not request this, please ignore this email and your password will remain unchanged.\n",
      })
    }
    return res.status(201).json("")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

export default router
