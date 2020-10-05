import { Router } from "express"
import database from "../models"
const router = Router()

router.get("/", async (req, res) => {
  try {
    const roles = await database.RoleConsultant.findAll()
    return res.status(201).json(roles)
  } catch (errors) {
    return res.status(400).send(errors)
  }
})

module.exports = router
