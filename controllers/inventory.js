import { Router } from "express"
import database from "../models"
import validateSingleInput from "../validation/single"
import validateModelInput from "../validation/model"
import validateHardwareInput from "../validation/hardware"
import validateEditHardwareInput from "../validation/editHardware"
import validateKitInput from "../validation/kit"
import validateEditKitInput from "../validation/editKit"
const router = Router()

router.get("/type", async (req, res) => {
  try {
    const type = await database.InventoryType.findAll()
    return res.status(201).json(type)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/type", async (req, res) => {
  const { name } = req.body
  try {
    const { errors, isValid } = validateSingleInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const type = await database.InventoryType.findOne({ where: { name } })
    if (type) {
      errors.name = "Already this type exists"
      return res.status(400).json(errors)
    } else {
      const type = await database.InventoryType.create(req.body)
      res.status(201).json(type)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/type/:id", async (req, res) => {
  try {
    const { id } = req.params
    const type = await database.InventoryType.destroy({ where: { id } })
    if (type) {
      return res.status(201).json("Type was removed")
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/manufacture", async (req, res) => {
  try {
    const model = await database.InventoryManufacture.findAll()
    return res.status(201).json(model)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/manufacture", async (req, res) => {
  const { name } = req.body
  try {
    const { errors, isValid } = validateSingleInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const manufacture = await database.InventoryManufacture.findOne({ where: { name } })
    if (manufacture) {
      errors.name = "Already this manufacture exists"
      return res.status(400).json(errors)
    } else {
      const manufacture = await database.InventoryManufacture.create(req.body)
      res.status(201).json(manufacture)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/manufacture/:id", async (req, res) => {
  try {
    const { id } = req.params
    const manufacture = await database.InventoryManufacture.destroy({ where: { id } })
    if (manufacture) {
      return res.status(201).json("Manufacture was removed")
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/model", async (req, res) => {
  try {
    const model = await database.InventoryModel.findAll({
      include: [
        {
          model: database.InventoryManufacture,
          as: "manufacture",
          attributes: ["name"],
        },
      ],
    })
    return res.status(201).json(model)
  } catch (error) {
    return res.status(400).json(errors)
  }
})

router.post("/model", async (req, res) => {
  const { name } = req.body
  try {
    const { errors, isValid } = validateModelInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const getModel = await database.InventoryModel.findOne({ where: { name } })
    if (getModel) {
      errors.name = "Already this model exists"
      return res.status(400).json(errors)
    } else {
      const model = await database.InventoryModel.create(req.body)
      const newModel = await database.InventoryModel.findByPk(model.id, {
        include: [
          {
            model: database.InventoryManufacture,
            as: "manufacture",
            attributes: ["name"],
          },
        ],
      })
      res.status(201).json(newModel)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/model/:id", async (req, res) => {
  try {
    const { id } = req.params
    const model = await database.InventoryModel.destroy({ where: { id } })
    if (model) {
      return res.status(201).json({ success: "Model was removed" })
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/hardware", async (req, res) => {
  try {
    const hardware = await database.Hardware.findAll({
      attributes: ["id", "serialNumber", "isFaulty"],
      include: [
        {
          model: database.InventoryType,
          as: "type",
          attributes: ["name"],
        },
        {
          model: database.InventoryModel,
          as: "model",
          attributes: ["name"],
          include: [
            {
              model: database.InventoryManufacture,
              as: "manufacture",
              attributes: ["name"],
            },
          ],
        },
      ],
    })
    return res.status(201).json(hardware)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/hardware", async (req, res) => {
  const { typeId, modelId, serialNumber } = req.body
  try {
    const { errors, isValid } = validateHardwareInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const hardware = await database.Hardware.create({
      typeId,
      modelId,
      serialNumber,
      isFaulty: false,
    })

    const newHardware = await database.Hardware.findByPk(hardware.id, {
      attributes: ["id", "serialNumber", "isFaulty"],
      include: [
        {
          model: database.InventoryType,
          as: "type",
          attributes: ["name"],
        },
        {
          model: database.InventoryModel,
          as: "model",
          attributes: ["name"],
          include: [
            {
              model: database.InventoryManufacture,
              as: "manufacture",
              attributes: ["name"],
            },
          ],
        },
      ],
    })
    res.status(201).json(newHardware)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.put("/hardware/:id", async (req, res) => {
  const { id } = req.params
  const hardware = req.body
  try {
    const { errors, isValid } = validateEditHardwareInput(hardware)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    await database.Hardware.update(hardware, { where: { id } })
    const updatedHardware = await database.Hardware.findByPk(id, {
      attributes: ["id", "serialNumber", "isFaulty"],
      include: [
        {
          model: database.InventoryType,
          as: "type",
          attributes: ["name"],
        },
        {
          model: database.InventoryModel,
          as: "model",
          attributes: ["name"],
          include: [
            {
              model: database.InventoryManufacture,
              as: "manufacture",
              attributes: ["name"],
            },
          ],
        },
      ],
    })
    res.status(201).json(updatedHardware)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/hardware/:id", async (req, res) => {
  try {
    const { id } = req.params
    const hardware = await database.Hardware.destroy({ where: { id } })
    if (hardware) {
      return res.status(201).json("Hardware was removed")
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.get("/kit", async (req, res) => {
  try {
    const kit = await database.InventoryKit.findAll({
      attributes: ["id", "name", "calibrationNumber", "calibrationCurDate", "calibrationDueDate", "isFaulty"],
      include: [
        {
          attributes: ["id", "serialNumber"],
          model: database.Hardware,
          as: "hardwares",
          through: { attributes: [] },
          include: [
            {
              model: database.InventoryType,
              as: "type",
              attributes: ["name"],
            },
            {
              model: database.InventoryModel,
              as: "model",
              attributes: ["name"],
              include: [
                {
                  model: database.InventoryManufacture,
                  as: "manufacture",
                  attributes: ["name"],
                },
              ],
            },
          ],
        },
      ],
    })
    return res.status(201).json(kit)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.post("/kit", async (req, res) => {
  const { name, calibrationNumber, calibrationCurDate, calibrationDueDate, hardwares } = req.body

  try {
    const { errors, isValid } = validateKitInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }
    const kit = await database.InventoryKit.findOne({ where: { name } })
    if (kit) {
      errors.name = "Already this kit exists"
      return res.status(400).json(errors)
    } else {
      const kit = await database.InventoryKit.create({
        name,
        calibrationNumber,
        calibrationCurDate,
        calibrationDueDate,
        isFaulty: false,
      })

      const keys = hardwares.map(hardware => ({
        hardwareId: hardware,
        kitId: kit.id,
      }))
      await database.HardwareKit.bulkCreate(keys, { returning: true })
      const newKit = await database.InventoryKit.findByPk(kit.id, {
        attributes: ["id", "name", "calibrationNumber", "calibrationCurDate", "calibrationDueDate", "isFaulty"],
        include: [
          {
            attributes: ["id", "serialNumber"],
            model: database.Hardware,
            as: "hardwares",
            through: { attributes: [] },
            include: [
              {
                model: database.InventoryType,
                as: "type",
                attributes: ["name"],
              },
              {
                model: database.InventoryModel,
                as: "model",
                attributes: ["name"],
                include: [
                  {
                    model: database.InventoryManufacture,
                    as: "manufacture",
                    attributes: ["name"],
                  },
                ],
              },
            ],
          },
        ],
      })
      return res.status(201).json(newKit)
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.put("/kit/:id", async (req, res) => {
  const { id } = req.params
  const kit = req.body

  try {
    const { errors, isValid } = validateEditKitInput(kit)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    await database.InventoryKit.update(kit, { where: { id } })
    const updatedKit = await database.InventoryKit.findByPk(id, {
      attributes: ["id", "name", "calibrationNumber", "calibrationCurDate", "calibrationDueDate", "isFaulty"],
      include: [
        {
          attributes: ["id", "serialNumber"],
          model: database.Hardware,
          as: "hardwares",
          through: { attributes: [] },
          include: [
            {
              model: database.InventoryType,
              as: "type",
              attributes: ["name"],
            },
            {
              model: database.InventoryModel,
              as: "model",
              attributes: ["name"],
              include: [
                {
                  model: database.InventoryManufacture,
                  as: "manufacture",
                  attributes: ["name"],
                },
              ],
            },
          ],
        },
      ],
    })
    return res.status(201).json(updatedKit)
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

router.delete("/kit/:id", async (req, res) => {
  try {
    const { id } = req.params
    await database.HardwareKit.destroy({ where: { kitId: id } })
    const kit = await database.InventoryKit.destroy({ where: { id } })
    if (kit) {
      return res.status(201).json({ success: "Kit was removed" })
    }
  } catch (errors) {
    return res.status(400).json(errors)
  }
})

module.exports = router
