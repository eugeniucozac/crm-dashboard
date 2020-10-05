import express from "express"
import cors from "cors"
import config from "dotenv"
import path from "path"
import cron from "node-cron"

import consultantsController from "./controllers/consultant"
import roleController from "./controllers/consultantRole"
import mailerRoutes from "./controllers/mailer"
import forgotPasswordRoutes from "./controllers/forgotPassword"
import resetPasswordRoutes from "./controllers/resetPassword"
import addressbooksController from "./controllers/addressbook"
import inventoryController from "./controllers/inventory"
import updatePasswordViaEmailRoutes from "./controllers/updatePasswordViaEmail"
import calibrationNotificationRoutes from "./controllers/calibrationNotification"
import issueRoutes from "./controllers/issue"
import projectRoutes from "./controllers/project"
import quoteRoutes from "./controllers/quote"
import invoiceRoutes from "./controllers/invoice"
import { xeroAccess } from "./utils/xero"

config.config()
const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
cron.schedule("0 25 * * * *", () => xeroAccess())

app.use("/api/consultants", consultantsController)
app.use("/api/roles", roleController)
app.use("/api/forgot", forgotPasswordRoutes)
app.use("/api/reset", resetPasswordRoutes)
app.use("/api/pupdate", updatePasswordViaEmailRoutes)
app.use("/api/calibrationNotification", calibrationNotificationRoutes)
app.use("/api/inventory", inventoryController)
app.use("/api/mailer", mailerRoutes)
app.use("/api/issue", issueRoutes)
app.use("/api/project", projectRoutes)
app.use("/api/quote", quoteRoutes)
app.use("/api/addressbook", addressbooksController)
app.use("/api/invoice", invoiceRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))
  app.use("/", express.static(path.join(__dirname, "/client/build")))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

export default app
