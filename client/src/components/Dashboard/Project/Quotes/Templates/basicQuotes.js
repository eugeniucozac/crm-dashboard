const basicQuotesTemplate = (createdQuote, alphabet) => {
  return `<div class="basic-quotes">
          ${createdQuote[0].services
            .map((service, index) => `<h2>${alphabet[index].toUpperCase()}: ${service.name}</h2>${service.content}`)
            .join(" ")}
          </div>`
}

export default basicQuotesTemplate
