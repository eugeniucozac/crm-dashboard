const basicPriceTemplate = (createdQuote, alphabet, prices) => {
  return `<div class="basic-price"><table>
            ${createdQuote[0].services
              .map((service, index) => {
                return `<tr>
                          <td>${alphabet[index].toUpperCase()}: ${service.name}</td>
                          <td style="text-align: right">
                            <strong> £${prices[`a${index}`]} (+VAT)</strong> 
                          </td>
                        </tr>`
              })
              .join(" ")}</table></div>`
}

export default basicPriceTemplate
