import { Router } from "express"
import database from "../models"
import validateSingleInput from "../validation/single"
import validateClientInput from "../validation/client"
const router = Router()

router.get("/", async (req, res) => {
  try {
    const addressbook = await database.AddressBook.findAll({
      attributes: ["id", "companyName", "addressName", "postCode", "city", "country"],
      include: [
        {
          model: database.ContactUser,
          as: "users",
          attributes: ["id", "firstName", "lastName", "email1", "email2", "phoneNumber1", "phoneNumber2"],
          include: [
            {
              model: database.RoleAddressUser,
              as: "role",
              attributes: ["name"],
            },
          ],
        },
      ],
    })
    return res.status(201).json(addressbook)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/", async (req, res) => {
  const { addressName, companyName, postCode, city, country, users } = req.body
  try {
    const { errors, isValid } = validateClientInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }
    const addressBook = await database.AddressBook.create({
      companyName,
      addressName,
      postCode,
      city,
      country,
    })

    const allUsers = users.map(user => Object.assign({}, user, { addressBookId: addressBook.id }))
    await database.ContactUser.bulkCreate(allUsers, { returning: true })

    const newAddressBook = await database.AddressBook.findByPk(addressBook.id, {
      attributes: ["id", "companyName", "addressName", "postCode", "city", "country"],
      include: [
        {
          model: database.ContactUser,
          as: "users",
          attributes: ["id", "firstName", "lastName", "email1", "email2", "phoneNumber1", "phoneNumber2"],
          include: [
            {
              model: database.RoleAddressUser,
              as: "role",
              attributes: ["name"],
            },
          ],
        },
      ],
    })

    return res.status(201).json(newAddressBook)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { users, usersToDelete } = req.body

  const updatedAddressBook = req.body
  try {
    const { errors, isValid } = validateClientInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    if (users.length) {
      const allUsers = users.map(user => Object.assign({}, user, { addressBookId: id }))
      await database.ContactUser.bulkCreate(allUsers, { returning: true })
    }

    if (usersToDelete.length) {
      await database.ContactUser.destroy({ where: { id: usersToDelete } })
    }

    await database.AddressBook.update(updatedAddressBook, { where: { id } })
    const newAddressBook = await database.AddressBook.findByPk(id, {
      attributes: ["id", "companyName", "addressName", "postCode", "city", "country"],
      include: [
        {
          model: database.ContactUser,
          as: "users",
          attributes: ["id", "firstName", "lastName", "email1", "email2", "phoneNumber1", "phoneNumber2"],
          include: [
            {
              model: database.RoleAddressUser,
              as: "role",
              attributes: ["name"],
            },
          ],
        },
      ],
    })

    return res.status(201).json(newAddressBook)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await database.AddressBook.destroy({ where: { id } })
    if (deleted) {
      return res.status(201).json("Address Book was deleted")
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id/users", async (req, res) => {
  const { id } = req.params
  try {
    const contact = await database.ContactUser.findAll({
      where: { addressBookId: id },
      attributes: ["id", "firstName", "lastName", "email1", "email2", "phoneNumber1", "phoneNumber2"],
      include: [
        {
          model: database.RoleAddressUser,
          as: "role",
          attributes: ["name"],
        },
      ],
    })
    return res.status(201).json(contact)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/:id/users", async (req, res) => {
  try {
    const user = await database.ContactUser.create(req.body)
    const newUser = await database.ContactUser.findByPk(user.id, {
      attributes: ["firstName", "lastName", "email1", "email2", "phoneNumber1", "phoneNumber2"],
      include: [
        {
          model: database.RoleAddressUser,
          as: "role",
          attributes: ["name"],
        },
      ],
    })
    res.status(201).json(newUser)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:addressBookId/users/:contactUserId", async (req, res) => {
  const { contactUserId } = req.params
  try {
    const deleted = await database.ContactUser.destroy({ where: { id: contactUserId } })
    if (deleted) {
      return res.status(201).json("Contact User was deleted")
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/roles", async (req, res) => {
  try {
    const roles = await database.RoleAddressUser.findAll()
    return res.status(201).json(roles)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/roles", async (req, res) => {
  try {
    const { errors, isValid } = validateSingleInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }
    const role = await database.RoleAddressUser.create(req.body)
    return res.status(201).json(role)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const project = await database.AddressBook.findByPk(id, {
      attributes: ["id", "companyName"],
      include: [
        {
          model: database.ContactUser,
          as: "users",
          attributes: ["firstName", "lastName", "email1", "email2", "phoneNumber1", "phoneNumber2"],
          include: [
            {
              model: database.RoleAddressUser,
              as: "role",
              attributes: ["name"],
            },
          ],
        },
      ],
    })
    return res.status(201).json(project)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

module.exports = router
