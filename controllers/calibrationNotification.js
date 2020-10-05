import { Router } from "express"
import database from "../models"
import nodemailerMailgun from "../utils/mailgun"
const router = Router()

router.post("/", async (req, res) => {
  const allHardwareKits = await database.HardwareKit.findAll()
  const allEngineers = await database.Engineer.findAll()
  const getCurrentDate = new Date()

  const tempArr = []
  const emails = []

  allEngineers.filter(item => item.dataValues.roleId == 3).map(item => emails.push(item.dataValues.email))

  allHardwareKits.map(item => {
    var difference = new Date(item.dataValues.calibrationDueDate) - getCurrentDate
    var toDays = difference / (60 * 60 * 24 * 1000)
    if (toDays < 14 && toDays > 0) {
      tempArr.push(item.dataValues)
    }
  })

  nodemailerMailgun.sendMail({
    to: emails,
    from: "ec@kpacoustics.com",
    subject: "Calibration Alert",
    text: `<p>You are receiving this because you (or someone else) must do the calibration for some Kits or Hardware:</p>
          <ul>
            ${tempArr.map(item => `<li><strong>${item.name}</strong></li>`).join("")}
          </ul>`,
  })
})

export default router
