import { Router } from "express"
import database from "../models"
import path from "path"
import fs from "fs"
import pdf from "html-pdf"
import moment from "moment"
import validateServiceInput from "../validation/service"
import { svgLogo } from "../storage/constants"
const router = Router()

router.post("/", async (req, res) => {
  try {
    const quote = await database.Quote.create(req.body)
    const newQuote = await database.Quote.findByPk(quote.id, {
      attributes: ["id", "name"],
    })
    res.status(201).json(newQuote)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const quote = await database.Quote.findByPk(id)
    const htmlFile = `${process.cwd()}/storage/html/${quote.name}.html`
    const pdfFile = `${process.cwd()}/storage/quotes/${quote.name}.pdf`
    fs.exists(htmlFile, exists => exists && fs.unlinkSync(htmlFile))
    fs.exists(pdfFile, exists => exists && fs.unlinkSync(pdfFile))
    await database.Quote.destroy({ where: { id } })
    return res.status(201).json("Quote was deleted")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/files/:name", async (req, res) => {
  const { name } = req.params
  res.sendFile(`${process.cwd()}/storage/quotes/${name}.pdf`)
})

router.get("/templates", (req, res) => {
  try {
    const files = fs.readdirSync(`${process.cwd()}/storage/templates`).map(filename => path.parse(filename).name)
    res.status(201).json(files)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/gethtml/:name", (req, res) => {
  const { name } = req.params
  try {
    const html = fs.readFileSync(`${process.cwd()}/storage/templates/${name}.html`, "utf8")
    res.status(201).json(html)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/htmltopdf/:name", (req, res) => {
  const { name } = req.params
  const { projectId, quotesLength, address } = req.body

  const config = {
    type: "pdf",
    quality: "100",
    renderDelay: 1000,
    header: {
      height: "27mm",
      contents: {
        default: `<div class="default-header">
                    <div>
                      <span>${svgLogo}</span>
                      <span>${projectId}.${moment(new Date()).format("YYMMDD")}.Q${quotesLength + 1}</span>
                      <span>${moment(new Date()).format("D MMMM YYYY")}</span>
                    </div>
                  </div>`,
      },
    },
    footer: {
      contents: {
        default: `<div class="default-footer">
                    <div>
                      <span>${projectId}:${address}</span>
                      <span>Page {{page}} of {{pages}}</span>
                    </div>
                    <div>
                      <span>Scope of Work and Fee Proposal</span>
                    </div>
                  </div>`,
      },
    },
  }
  try {
    const html = fs.readFileSync(`${process.cwd()}/storage/html/${name}.html`, "utf8")
    pdf.create(html, config).toFile(`${process.cwd()}/storage/quotes/${name}.pdf`, function (err, res) {
      if (err) return console.log(err)
    })
    res.status(201).json("Done")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/htmlpdf/:name", async (req, res) => {
  const { name } = req.params
  res.sendFile(`${process.cwd()}/storage/test/${name}.pdf`)
})

router.post("/htmlpdf", (req, res) => {
  const numberQuote = 20982
  const quotesLength = 5
  const address = "FILBERT STREET, LEICESTER, UK"
  const config = {
    type: "pdf",
    renderDelay: 4000,
    zoomFactor: 0.6,
    quality: "75",
    header: {
      height: "27mm",
      contents: {
        default: `<div class="default-header">
                    <div>
                      <span>${svgLogo}</span>
                      <span>${numberQuote}.${moment(new Date()).format("YYMMDD")}.Q${quotesLength + 1}</span>
                      <span>${moment(new Date()).format("D MMMM YYYY")}</span>
                    </div>
                  </div>`,
      },
    },
    footer: {
      contents: {
        default: `<div class="default-footer">
                    <div>
                      <span>${numberQuote}:${address}</span>
                      <span>Page {{page}} of {{pages}}</span>
                    </div>
                    <div>
                      <span>Scope of Work and Fee Proposal</span>
                    </div>
                  </div>`,
      },
    },
  }
  try {
    const html = fs.readFileSync(`${process.cwd()}/storage/test/jenelu.html`, "utf8")
    pdf.create(html, config).toFile(`${process.cwd()}/storage/test/jenelu.pdf`, function (err, res) {
      if (err) return console.log(err)
    })
    res.status(201).json("Done")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/savehtml/:name", (req, res) => {
  const { name } = req.params
  try {
    fs.writeFileSync(`${process.cwd()}/storage/html/${name}.html`, req.body.content)
    res.status(201).json("Done")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/:quoteName/files/:templateName", async (req, res) => {
  const { quoteName, templateName } = req.params
  try {
    const html = fs.readFileSync(`${process.cwd()}/storage/templates/${templateName}.html`, "utf8")
    pdf.create(html).toStream((err, stream) => {
      stream.pipe(fs.createWriteStream(`${process.cwd()}/storage/quotes/${quoteName}.pdf`))
    })
    res.status(201).json("Done")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/:quoteId/section", async (req, res) => {
  const { name } = req.body
  const { quoteId } = req.params
  try {
    const section = await database.QuoteSection.create({
      name,
      quoteId,
    })

    const newSection = await database.QuoteSection.findByPk(section.id, {
      attributes: ["id", "name"],
    })
    res.status(201).json(newSection)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/:quoteId/section/:sectionId", async (req, res) => {
  const { sectionId } = req.params
  try {
    await database.QuoteSection.destroy({ where: { id: sectionId } })
    return res.status(201).json("Quote Section was deleted")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/status", async (req, res) => {
  try {
    const status = await database.QuoteStatus.findAll({
      attributes: ["id", "name"],
    })
    return res.status(201).json(status)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/status", async (req, res) => {
  try {
    const status = await database.QuoteStatus.create(req.body)
    const newStatus = await database.QuoteStatus.findByPk(status.id, {
      attributes: ["id", "name"],
    })
    res.status(201).json(newStatus)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/status/:id", async (req, res) => {
  const { id } = req.params
  try {
    await database.QuoteStatus.destroy({ where: { id } })
    return res.status(201).json("Was deleted")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/serviceprice", async (req, res) => {
  try {
    const serviceprice = await database.QuoteServicePrice.findAll({
      attributes: ["id", "name", "price", "content"],
      include: [
        {
          model: database.QuoteServicePriceAddon,
          as: "addons",
          attributes: ["id", "name", "price", "content"],
        },
      ],
    })
    return res.status(201).json(serviceprice)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.put("/serviceprice/:id", async (req, res) => {
  const { id } = req.params
  const updatedQuote = req.body
  try {
    const { errors, isValid } = validateServiceInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    await database.QuoteServicePrice.update(updatedQuote, { where: { id } })
    const serviceprice = await database.QuoteServicePrice.findByPk(id, {
      attributes: ["id", "name", "price", "content"],
      include: [
        {
          model: database.QuoteServicePriceAddon,
          as: "addons",
          attributes: ["id", "name", "price", "content"],
        },
      ],
    })
    res.status(201).json(serviceprice)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/serviceprice", async (req, res) => {
  const { name, price, addons } = req.body

  try {
    const { errors, isValid } = validateServiceInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const serviceprice = await database.QuoteServicePrice.create({ name, price })
    if (addons) {
      const newAddons = addons.map(addon => ({
        name: addon.name,
        price: addon.price,
        content: addon.content,
        servicePriceId: serviceprice.id,
      }))
      await database.QuoteServicePriceAddon.bulkCreate(newAddons, { returning: true })
    }

    const newServicePrice = await database.QuoteServicePrice.findByPk(serviceprice.id, {
      attributes: ["name", "price"],
      include: [
        {
          model: database.QuoteServicePriceAddon,
          as: "addons",
          attributes: ["id", "name", "price", "content"],
        },
      ],
    })
    res.status(201).json(newServicePrice)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

/*
router.put("/serviceprice/:id", async (req, res) => {
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
      attributes: ["id", "companyName", "addressName"],
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

router.post("/:quoteId/section", async (req, res) => {
  const { name } = req.body
  const { quoteId } = req.params
  try {
    const section = await database.QuoteSection.create({
      name,
      quoteId,
    })

    const newSection = await database.QuoteSection.findByPk(section.id, {
      attributes: ["id", "name"],
    })
    res.status(201).json(newSection)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})
*/

router.delete("/serviceprice/:id", async (req, res) => {
  const { id } = req.params
  try {
    await database.QuoteServicePrice.destroy({ where: { id } })
    return res.status(201).json("Quote Price was deleted")
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const issue = await database.Quote.findByPk(id, {
      attributes: ["name"],
    })
    return res.status(201).json(issue)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

export default router
