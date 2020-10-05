import { Router } from "express"
import nodemailerMailgun from "../utils/mailgun"
const router = Router()

router.post("/quote", async (req, res) => {
  const { to, from, subject, text, filename } = req.body
  nodemailerMailgun.sendMail(
    {
      to,
      from,
      subject,
      text,
      attachments: [
        {
          filename,
          path: `${process.cwd()}/storage/quotes/${filename}.pdf`,
        },
      ],
    },
    (err, info) => (err ? console.log("Error: " + err) : console.log("Response: " + info))
  )
})

export default router
