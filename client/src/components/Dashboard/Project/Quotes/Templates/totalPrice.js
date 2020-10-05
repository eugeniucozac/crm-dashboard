const totalPriceTemplate = prices => {
  return `<span class="total-price">
            <strong> 
              £${Object.values(prices).reduce((acc, value) => acc + parseInt(value), 0)} (+VAT).
            </strong>
          </span>`
}

export default totalPriceTemplate
