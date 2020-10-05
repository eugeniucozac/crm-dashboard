const quotePriceTemplate = (createdQuote, alphabet, prices) => {
  return `<div class="quote-price">${createdQuote
    .map((item, indexSection) => {
      return `<h3>${alphabet[indexSection].toUpperCase()}. ${item.name}</h3>
                <table>${item.services
                  .map((service, index) => {
                    return `<tr>
                              <td>${alphabet[service.indexSection].toUpperCase()}.${service.indexService + 1}: 
                              ${service.name}</td>
                              <td style="text-align: right"><strong> £${
                                prices[`${alphabet[service.indexSection]}${index}`]
                              } (+VAT)</strong> </td>
                            </tr>
                            ${
                              service.addons &&
                              service.addons
                                .map((addon, indexAddon) => {
                                  return `<tr><td>${alphabet[service.indexSection].toUpperCase()}.${
                                    service.indexService + 1
                                  }.${indexAddon + 1}: ${addon.name} </td><td style="text-align: right"><strong> £${
                                    addon.price
                                  } (+VAT)</strong> </td></tr>`
                                })
                                .join(" ")
                            }`
                  })
                  .join(" ")}
                </table>`
    })
    .join(" ")}
    </div>`
}

export default quotePriceTemplate
