import { http } from "@utils/http"

export const sendQuote = async body => {
  return await http({
    url: "/api/mailer/quote",
    method: "POST",
    data: body,
  })
}
