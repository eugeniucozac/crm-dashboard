import { Router } from "express"
import database from "../models"
import validateSingleInput from "../validation/single"
import validateMessageInput from "../validation/message"
const router = Router()

router.get("/", async (req, res) => {
  try {
    const issue = await database.Issue.findAll({
      attributes: ["id", "hardwareId", "hardwareName", "createdAt", "title", "message"],
      include: [
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.IssueStatus,
          as: "status",
          attributes: ["id", "name"],
        },
        {
          model: database.IssueCategory,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    })
    return res.status(201).json(issue)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const issue = await database.Issue.findByPk(id, {
      attributes: ["id", "hardwareId", "hardwareName", "createdAt", "title", "message"],
      include: [
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.IssueStatus,
          as: "status",
          attributes: ["id", "name"],
        },
        {
          model: database.IssueCategory,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    })
    return res.status(201).json(issue)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const updatedIssue = req.body
  try {
    await database.Issue.update(updatedIssue, { where: { id } })
    const issueResponse = await database.Issue.findByPk(id, {
      attributes: ["id", "hardwareId", "hardwareName", "createdAt", "title", "message"],
      include: [
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.IssueStatus,
          as: "status",
          attributes: ["id", "name"],
        },
        {
          model: database.IssueCategory,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    })
    return res.status(201).json(issueResponse)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/", async (req, res) => {
  const { errors, isValid } = validateMessageInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }
  try {
    const issue = await database.Issue.create(req.body)
    const newIssue = await database.Issue.findByPk(issue.id, {
      attributes: ["id", "hardwareId", "createdAt", "title", "message"],
      include: [
        {
          model: database.Consultant,
          as: "consultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.IssueStatus,
          as: "status",
          attributes: ["id", "name"],
        },
        {
          model: database.IssueCategory,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    })
    return res.status(201).json(newIssue)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    await database.Message.destroy({ where: { issueId: id } })
    const issue = await database.Issue.destroy({ where: { id } })
    if (issue) {
      return res.status(201).json({ success: "Issue was removed" })
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/status/:id", async (req, res) => {
  const { id } = req.params
  try {
    const status = await database.IssueStatus.findByPk(id)
    return res.status(201).json(status)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/status", async (req, res) => {
  const { name } = req.body

  const { errors, isValid } = validateSingleInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const status = await database.IssueStatus.findOne({ where: { name } })
  if (status) {
    errors.name = "Already this status exists"
    return res.status(400).json(errors)
  } else {
    const status = await database.IssueStatus.create(req.body)
    res.status(201).json(status)
  }
})

router.delete("/status/:id", async (req, res) => {
  const { id } = req.params
  try {
    const status = await database.IssueStatus.destroy({ where: { id } })
    return res.status(201).json(status)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/category", async (req, res) => {
  const { name } = req.body
  const { errors, isValid } = validateSingleInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const category = await database.IssueCategory.findOne({ where: { name } })
  if (category) {
    errors.name = "Already this category exists"
    return res.status(400).json(errors)
  } else {
    const category = await database.IssueCategory.create(req.body)
    res.status(201).json(category)
  }
})

router.get("/:issueId/message", async (req, res) => {
  const { issueId } = req.params
  try {
    const message = await database.Message.findAll({
      where: { issueId },
      attributes: ["id", "issueId", "title", "message", "createdAt"],
      include: [
        {
          model: database.Consultant,
          as: "fromConsultant",
          attributes: ["firstName", "lastName"],
        },
        {
          model: database.MessageStatus,
          as: "status",
          attributes: ["name"],
        },
        {
          model: database.Consultant,
          as: "toConsultants",
          attributes: ["firstName", "lastName"],
          through: { attributes: [] },
        },
      ],
    })
    return res.status(201).json(message)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/:issueId/message", async (req, res) => {
  const { fromConsultantId, title, message, statusId, consultants } = req.body
  const { issueId } = req.params
  try {
    const { errors, isValid } = validateMessageInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const issue = await database.Issue.findByPk(issueId)
    if (issue) {
      const addMessage = await database.Message.create({
        issueId,
        fromConsultantId,
        title,
        message,
        statusId,
      })

      const keys = consultants.map(consultant => ({
        consultantId: consultant,
        messageId: addMessage.id,
      }))

      await database.MessageConsultant.bulkCreate(keys, { returning: true })
      const newMessage = await database.Message.findByPk(addMessage.id, {
        attributes: ["issueId", "title", "message", "createdAt"],
        include: [
          {
            model: database.Consultant,
            as: "fromConsultant",
            attributes: ["firstName", "lastName"],
          },
          {
            model: database.MessageStatus,
            as: "status",
            attributes: ["name"],
          },
          {
            model: database.Consultant,
            as: "toConsultants",
            attributes: ["firstName", "lastName"],
            through: { attributes: [] },
          },
        ],
      })
      return res.status(201).json(newMessage)
    } else {
      errors.title = "Issue does not exists"
      return res.status(400).json(errors)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:issueId/message/:messageId", async (req, res) => {
  const { messageId } = req.params
  try {
    await database.MessageConsultant.destroy({ where: { messageId } })
    const message = await database.Message.destroy({ where: { id: messageId } })
    if (message) {
      return res.status(201).json("Message was removed")
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/message/status/:id", async (req, res) => {
  try {
    const status = await database.MessageStatus.findAll()
    return res.status(201).json(status)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/message/status", async (req, res) => {
  const { name } = req.body
  const { errors, isValid } = validateSingleInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const status = await database.MessageStatus.findOne({ where: { name } })
  if (status) {
    errors.name = "Already this status exists"
    return res.status(400).json(errors)
  } else {
    const status = await database.MessageStatus.create(req.body)
    res.status(201).json(status)
  }
})

module.exports = router
