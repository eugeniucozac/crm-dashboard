import { Router } from "express"
import database from "../models"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import validateLoginInput from "../validation/login"
import validateRegisterInput from "../validation/register"
import validateChangeInput from "../validation/change"
const router = Router()

router.get("/", async (req, res) => {
  try {
    const consultants = await database.Consultant.findAll({
      attributes: { exclude: ["roleId"] },
      include: [
        {
          model: database.RoleConsultant,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    })
    return res.status(201).json(consultants)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const consultant = await database.Consultant.findByPk(req.params.id, {
      attributes: { exclude: ["roleId"] },
      include: [
        {
          model: database.RoleConsultant,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    })
    return res.status(201).json(consultant)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  try {
    const findConsultant = await database.Consultant.findOne({
      where: { email },
      attributes: {
        exclude: ["roleId"],
      },
      include: [
        {
          model: database.RoleConsultant,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    })

    if (findConsultant) {
      const {
        dataValues: { id, email, firstName, lastName, title },
        dataValues,
        role,
      } = findConsultant

      const roleName = role.name.toLowerCase().replace(/\s+/g, "-")
      if (roleName == "disabled") {
        errors.email = "Your account is dissabled"
        return res.status(400).json(errors)
      }

      bcrypt.compare(password.trim(), dataValues.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id,
            roleName,
            fullName: `${firstName} ${lastName}`,
            email,
            title,
          }
          jwt.sign(
            payload,
            process.env.JWT_KEY,
            {
              expiresIn: 300,
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
              })
            }
          )
        } else {
          errors.password = "Password is incorrect"
          return res.status(400).json(errors)
        }
      })
    } else {
      errors.email = "Email with this user does not exist"
      return res.status(400).json(errors)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/register", async (req, res) => {
  const { email, password } = req.body
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  try {
    const findConsultant = await database.Consultant.findOne({ where: { email } })

    if (findConsultant) {
      errors.email = "This email already exists"
      return res.status(400).json(errors)
    } else {
      const consultantPassword = req.body

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err
        })
      })

      const hashPassword = async () => {
        const hash = await bcrypt.hash(password, 10)
        return hash
      }
      consultantPassword.password = await hashPassword()
      consultantPassword.password2 = await hashPassword()

      const consultant = await database.Consultant.create(consultantPassword)
      const newConsultant = await database.Consultant.findByPk(consultant.id, {
        attributes: { exclude: ["roleId"] },
        include: [
          {
            model: database.RoleConsultant,
            as: "role",
            attributes: ["id", "name"],
          },
        ],
      })

      return res.status(201).json(newConsultant)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.put("/:id", async (req, res) => {
  const updatedConsultant = req.body
  const { password, password2 } = req.body
  const { id } = req.params

  const { errors, isValid } = validateChangeInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  try {
    if (password !== undefined) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err
        })
      })

      const hashPassword = async () => {
        const hash = await bcrypt.hash(password, 10)
        return hash
      }

      updatedConsultant.password = await hashPassword()
      updatedConsultant.password2 = await hashPassword()
    }

    await database.Consultant.update(updatedConsultant, { where: { id } })
    const consultant = await database.Consultant.findByPk(id, {
      attributes: { exclude: ["roleId"] },
      include: [
        {
          model: database.RoleConsultant,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    })

    return res.status(201).json(consultant)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.put("/:id/role", async (req, res) => {
  const updatedConsultant = req.body
  const { password } = req.body
  const { id } = req.params

  try {
    if (password !== undefined) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err
        })
      })

      const hashPassword = async () => {
        const hash = await bcrypt.hash(password, 10)
        return hash
      }

      updatedConsultant.password = await hashPassword()
      updatedConsultant.password2 = await hashPassword()
    }

    await database.Consultant.update(updatedConsultant, { where: { id } })
    const consultant = await database.Consultant.findByPk(id, {
      attributes: { exclude: ["roleId"] },
      include: [
        {
          model: database.RoleConsultant,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    })
    return res.status(201).json(consultant)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    let consultant = await database.Consultant.findByPk(req.params.id)
    if (!consultant) errors.name = "Cannot find consultant with this id"
    consultant = await consultant.destroy(req.body)
    res.status(201).json("Consultant was removed")
  } catch (errors) {
    res.status(400).json(errors)
  }
})

module.exports = router
