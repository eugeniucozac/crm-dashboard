import { Router } from "express"
import database from "../models"
import validateProjectInput from "../validation/project"
const router = Router()

router.get("/", async (req, res) => {
  try {
    const project = await database.Project.findAll({
      attributes: ["id", "description", "createdAt"],
      include: [
        {
          model: database.AddressBook,
          as: "addressBook",
          attributes: ["id", "companyName", "addressName", "postCode", "city", "country"],
          include: [
            {
              model: database.ContactUser,
              as: "users",
              attributes: ["firstName", "lastName", "email1", "phoneNumber1"],
              include: [
                {
                  model: database.RoleAddressUser,
                  as: "role",
                  attributes: ["name"],
                },
              ],
            },
          ],
        },
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.ProjectSite,
          as: "site",
          attributes: ["phoneNumber", "addressName", "postCode", "city", "country"],
        },
        {
          model: database.Consultant,
          as: "consultants",
          attributes: ["id", "firstName", "lastName"],
          through: { attributes: [] },
        },
        /*     {
          model: database.QuoteServicePrice,
          as: "servicePrices",
          attributes: ["name"],
          through: { attributes: [] },
        }, */
        {
          model: database.ProjectHistory,
          as: "history",
          attributes: ["createdAt"],
          include: [
            {
              model: database.Consultant,
              as: "consultant",
              attributes: ["firstName", "lastName"],
            },
            {
              model: database.ProjectHistoryStatus,
              as: "status",
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

router.put("/:projectId", async (req, res) => {
  const { projectId } = req.params
  const { sitePhoneNumber, siteAddressName, description, consultants } = req.body

  try {
    const { errors, isValid } = validateProjectInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    await database.Project.update({ description }, { where: { id: projectId } })
    if (sitePhoneNumber && siteAddressName) {
      await database.ProjectSite.update(
        {
          phoneNumber: sitePhoneNumber,
          addressName: siteAddressName,
          projectId,
        },
        { where: { projectId } }
      )
    }

    await database.ProjectAsConsultant.destroy({ where: { projectId } })
    const consultantKeys = consultants.map(consultant => ({
      consultantId: consultant,
      projectId,
    }))
    await database.ProjectAsConsultant.bulkCreate(consultantKeys, { returning: true })
    const newProject = await database.Project.findByPk(projectId, {
      attributes: ["id", "description", "createdAt"],
      include: [
        {
          model: database.AddressBook,
          as: "addressBook",
          attributes: ["companyName", "addressName"],
          include: [
            {
              model: database.ContactUser,
              as: "users",
              attributes: ["firstName", "lastName", "email1", "phoneNumber1"],
              include: [
                {
                  model: database.RoleAddressUser,
                  as: "role",
                  attributes: ["name"],
                },
              ],
            },
          ],
        },
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.ProjectSite,
          as: "site",
          attributes: ["phoneNumber", "addressName", "postCode", "city", "country"],
        },
        {
          model: database.Consultant,
          as: "consultants",
          attributes: ["id", "firstName", "lastName"],
          through: { attributes: [] },
        },
      ],
    })
    return res.status(201).json(newProject)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/", async (req, res) => {
  const {
    description,
    sitePhoneNumber,
    siteAddressName,
    sitePostCode,
    siteCity,
    siteCountry,
    consultants,
    addressBookId,
    consultantId,
  } = req.body
  try {
    const { errors, isValid } = validateProjectInput({ sitePhoneNumber, siteAddressName, description, consultants })

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const project = await database.Project.create({ description, addressBookId, consultantId })
    if (sitePhoneNumber && siteAddressName && siteCity && siteCountry) {
      await database.ProjectSite.create({
        phoneNumber: sitePhoneNumber,
        addressName: siteAddressName,
        postCode: sitePostCode,
        city: siteCity,
        country: siteCountry,
        projectId: project.id,
      })
    }

    const consultantKeys = consultants.map(consultant => ({
      consultantId: consultant,
      projectId: project.id,
    }))

    await database.ProjectAsConsultant.bulkCreate(consultantKeys, { returning: true })

    const newProject = await database.Project.findByPk(project.id, {
      attributes: ["id", "description", "createdAt"],
      include: [
        {
          model: database.AddressBook,
          as: "addressBook",
          attributes: ["companyName", "addressName"],
          include: [
            {
              model: database.ContactUser,
              as: "users",
              attributes: ["firstName", "lastName", "email1", "phoneNumber1"],
              include: [
                {
                  model: database.RoleAddressUser,
                  as: "role",
                  attributes: ["name"],
                },
              ],
            },
          ],
        },
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.ProjectSite,
          as: "site",
          attributes: ["phoneNumber", "addressName", "postCode", "city", "country"],
        },
        {
          model: database.Consultant,
          as: "consultants",
          attributes: ["id", "firstName", "lastName"],
          through: { attributes: [] },
        },
        {
          model: database.ProjectHistory,
          as: "history",
          attributes: ["createdAt"],
          include: [
            {
              model: database.Consultant,
              as: "consultant",
              attributes: ["firstName", "lastName"],
            },
            {
              model: database.ProjectHistoryStatus,
              as: "status",
              attributes: ["name"],
            },
          ],
        },
        /*    {
          model: database.QuoteServicePrice,
          as: "servicePrices",
          attributes: ["name"],
          through: { attributes: [] },
        }, */
      ],
    })
    res.status(201).json(newProject)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    await database.ProjectAsConsultant.destroy({ where: { projectId: id } })
    await database.ProjectAsServicePrice.destroy({ where: { projectId: id } })
    await database.Project.destroy({ where: { id } })
    return res.status(201).json("Project was deleted")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id/quote", async (req, res) => {
  const { id } = req.params
  try {
    const quote = await database.Quote.findAll({
      where: { projectId: id },
      attributes: ["id", "name", "converted", "templateName", "invoiced", "paidAmount"],
      include: [
        {
          model: database.QuoteSection,
          as: "sections",
          attributes: ["name"],
          include: [
            {
              model: database.QuoteSectionService,
              as: "services",
              attributes: ["price"],
              include: [
                {
                  model: database.QuoteServicePrice,
                  as: "servicePrice",
                  attributes: ["id", "name", "content"],
                },
              ],
            },
          ],
        },
      ],
    })
    return res.status(201).json(quote)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/:id/quote", async (req, res) => {
  const { id } = req.params
  const { name, converted, sections, templateName } = req.body

  try {
    const quote = await database.Quote.create({ name, converted, statusId: 1, projectId: id, templateName })
    const sectionKeys = sections.map(section => ({
      name: section.name,
      quoteId: quote.id,
    }))

    const sectionIds = await database.QuoteSection.bulkCreate(sectionKeys, { returning: true })

    await sectionIds.map((section, i) => {
      let serviceKeys = sections[i].services.map(service => ({
        price: service.price,
        sectionId: section.id,
        servicePriceId: service.servicePriceId,
      }))

      database.QuoteSectionService.bulkCreate(serviceKeys, { returning: true })
    })

    const newQuote = await database.Quote.findByPk(quote.id, {
      attributes: ["id", "name", "converted", "templateName"],
      include: [
        {
          model: database.QuoteSection,
          as: "sections",
          attributes: ["name"],
          include: [
            {
              model: database.QuoteSectionService,
              as: "services",
              attributes: ["price"],
              include: [
                {
                  model: database.QuoteServicePrice,
                  as: "servicePrice",
                  attributes: ["name", "content"],
                },
              ],
            },
          ],
        },
      ],
    })
    return res.status(201).json(newQuote)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:projectId/quote/:quoteId", async (req, res) => {
  const { quoteId } = req.params
  try {
    await database.QuoteSection.destroy({ where: { quoteId } })
    await database.Quote.destroy({ where: { id: quoteId } })
    return res.status(201).json("Quote was deleted")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.put("/:projectId/quote/:quoteId", async (req, res) => {
  const { quoteId } = req.params
  const updatedQuote = req.body
  try {
    await database.Quote.update(updatedQuote, { where: { quoteId } })
    const quote = await database.Quote.findByPk(quoteId)
    return res.status(201).json(quote)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id/comment", async (req, res) => {
  const { id } = req.params
  try {
    const comment = await database.ProjectComment.findAll({
      where: { projectId: id },
      attributes: ["id", "content", "createdAt"],
      include: [
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
      ],
    })
    return res.status(201).json(comment)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/:id/comment", async (req, res) => {
  const { content, consultantId } = req.body
  const { id } = req.params
  try {
    const comment = await database.ProjectComment.create({
      content,
      projectId: id,
      consultantId,
    })
    const allComments = await database.ProjectComment.findByPk(comment.id, {
      attributes: ["content", "createdAt"],
      include: [
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
      ],
    })
    res.status(201).json(allComments)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:projectId/comment/:commentId", async (req, res) => {
  const { commentId } = req.params
  try {
    await database.ProjectComment.destroy({ where: { id: commentId } })
    return res.status(201).json("Was deleted")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id/history", async (req, res) => {
  const { id } = req.params
  try {
    const history = await database.ProjectHistory.findAll({
      where: { projectId: id },
      attributes: ["id", "createdAt"],
      include: [
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.ProjectHistoryStatus,
          as: "status",
          attributes: ["name"],
        },
      ],
    })
    return res.status(201).json(history)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/:id/history", async (req, res) => {
  const { id } = req.params
  const { statusId, consultantId } = req.body
  try {
    await database.ProjectHistory.create({
      statusId,
      consultantId,
      projectId: id,
    })

    const history = await database.ProjectHistory.findAll({
      where: { projectId: id },
      attributes: ["id", "createdAt"],
      include: [
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.ProjectHistoryStatus,
          as: "status",
          attributes: ["name"],
        },
      ],
    })
    return res.status(201).json(history)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/history/status", async (req, res) => {
  try {
    await database.ProjectHistoryStatus.create(req.body)

    const history = await database.ProjectHistoryStatus.findAll({})
    return res.status(201).json(history)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const project = await database.Project.findByPk(id, {
      attributes: ["id", "description", "createdAt"],
      include: [
        {
          model: database.AddressBook,
          as: "addressBook",
          attributes: ["companyName", "addressName"],
        },
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.ProjectSite,
          as: "site",
          attributes: ["phoneNumber", "addressName"],
        },
        {
          model: database.Consultant,
          as: "consultants",
          attributes: ["id", "firstName", "lastName"],
          through: { attributes: [] },
        },
      ],
    })
    return res.status(201).json(project)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

export default router
