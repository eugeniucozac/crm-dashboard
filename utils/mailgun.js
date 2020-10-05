import nodemailer from "nodemailer"
import mg from "nodemailer-mailgun-transport"
require("dotenv").config()

export const nodemailerMailgun = nodemailer.createTransport(
  mg({
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  })
)
