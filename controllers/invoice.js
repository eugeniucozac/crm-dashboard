import { Router } from "express"
import database from "../models"
import { xeroAccess } from "../utils/xero"
import request from "request"
const router = Router()

router.get("/", async (req, res) => {
  const { invoicesRequestOptions } = await xeroAccess("invoices")
  request.get(invoicesRequestOptions, (error, response) => {
    const result = JSON.parse(response.body).Invoices
    return res.status(201).send(result)
  })
})

/*
router.get("/", async (req, res) => {
  try {
    const invoice = await database.Invoice.findAll({
      attributes: { exclude: ["branding", "tax", "createdAt", "updatedAt"] },
      include: [
        {
          model: database.InvoiceBranding,
          as: "branding",
          attributes: ["name"],
        },
        {
          model: database.InvoiceTax,
          as: "tax",
          attributes: ["name"],
        },
      ],
    })
    return res.status(201).json(invoice)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/", async (req, res) => {
  try {
    const invoice = await database.Invoice.create(req.body)
    const newInvoice = await database.Invoice.findByPk(invoice.id, {
      attributes: { exclude: ["branding", "tax", "createdAt", "updatedAt"] },
      include: [
        {
          model: database.InvoiceBranding,
          as: "branding",
          attributes: ["name"],
        },
        {
          model: database.InvoiceTax,
          as: "tax",
          attributes: ["name"],
        },
      ],
    })
    return res.status(201).json(newInvoice)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await database.Invoice.destroy({ where: { id } })
    if (deleted) {
      return res.status(201).json("Invoice was deleted")
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/branding", async (req, res) => {
  try {
    const status = await database.InvoiceBranding.findAll({
      attributes: ["id", "name"],
    })
    return res.status(201).json(status)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/branding", async (req, res) => {
  const { name } = req.body
  try {
    const { errors, isValid } = validateSingleInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const branding = await database.InvoiceBranding.findOne({ where: { name } })
    if (branding) {
      errors.name = "Already this branding exists"
      return res.status(400).json(errors)
    } else {
      const branding = await database.InvoiceBranding.create(req.body)
      const newBranding = await database.InvoiceBranding.findByPk(branding.id, {
        attributes: ["id", "name"],
      })
      res.status(201).json(newBranding)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/tax", async (req, res) => {
  try {
    const taxType = await database.InvoiceTax.findAll({
      attributes: ["id", "name"],
    })
    return res.status(201).json(taxType)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/tax", async (req, res) => {
  const { name } = req.body
  try {
    const { errors, isValid } = validateSingleInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const taxType = await database.InvoiceTax.findOne({ where: { name } })
    if (taxType) {
      errors.name = "Already this tax type exists"
      return res.status(400).json(errors)
    } else {
      const taxType = await database.InvoiceTax.create(req.body)
      const newTaxType = await database.InvoiceTax.findByPk(taxType.id, {
        attributes: ["id", "name"],
      })
      res.status(201).json(newTaxType)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const invoice = await database.Invoice.findByPk(id, {
      attributes: { exclude: ["id", "branding", "tax", "createdAt", "updatedAt"] },
      include: [
        {
          model: database.InvoiceBranding,
          as: "branding",
          attributes: ["name"],
        },
        {
          model: database.InvoiceTax,
          as: "tax",
          attributes: ["name"],
        },
      ],
    })
    return res.status(201).json(invoice)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})
*/
export default router
