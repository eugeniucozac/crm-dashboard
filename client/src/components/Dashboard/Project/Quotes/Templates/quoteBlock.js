import { template6 } from "@data"

const quoteBlockTemplate = (createdQuote, alphabet) => {
  return `<div class="quote-block">${createdQuote
    .map((item, indexSection) => {
      let context = template6.find(temp => item.name.includes(temp.name.toLowerCase()))
      return `<h2>${alphabet[indexSection].toUpperCase()}. ${item.name.toUpperCase()} </h2>
      ${context ? context.content : ""}
      ${item.services
        .map(
          service =>
            `<h2>${alphabet[service.indexSection].toUpperCase()}.${service.indexService + 1}: ${service.name}</h2>${
              service.content ? service.content : ""
            } 
            ${
              service.addons &&
              service.addons
                .map((addon, indexAddon) => {
                  return `<h3>${alphabet[service.indexSection].toUpperCase()}.${service.indexService + 1}.${
                    indexAddon + 1
                  }: ${addon.name} </h3>
                ${addon.content}`
                })
                .join(" ")
            }
            `
        )
        .join(" ")}`
    })
    .join(" ")}</div>`
}

export default quoteBlockTemplate
