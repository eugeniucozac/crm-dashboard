import database from "../models"
import rp from "request-promise"

export const xeroAccess = async api => {
  const token = await database.XeroToken.findOne({ where: { id: 1 } })
  let refresh_token = token.dataValues.name

  const options = {
    method: "POST",
    url: "https://identity.xero.com/connect/token?=",
    headers: {
      grant_type: "refresh_token",
      "Content-Type": "application/json",
    },
    formData: {
      grant_type: "refresh_token",
      refresh_token,
      client_id: process.env.XERO_CLIENT_ID,
      client_secret: process.env.XERO_CLIENT_SECRET,
    },
  }

  return await rp(options).then(response => {
    const auth = JSON.parse(response)
    const invoicesRequestOptions = {
      url: `https://api.xero.com/api.xro/2.0/${api}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "xero-tenant-id": process.env.XERO_TENANT_ID,
      },
      auth: {
        bearer: auth.access_token,
      },
    }
    database.XeroToken.update({ name: auth.refresh_token }, { where: { id: 1 } })
    return { response, invoicesRequestOptions }
  })
}
