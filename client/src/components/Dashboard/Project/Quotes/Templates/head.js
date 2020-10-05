import moment from "moment"

const headTemplate = (project, quotesLength) => {
  const {
    addressBook: { addressName, postCode, city, country },
    id,
  } = project

  return `<div class="head">
            <p>${moment(new Date()).format("D MMMM YYYY")}</p>
            <p>Ref: ${id}.${moment(new Date()).format("YYMMDD")}.Q${quotesLength + 1}</p>
            <p>John Doe</p>
            <p>KP Acoustics Ltd.</p>
            <p>By email to:</p>
            <p>Dear</p>
            <h2>${id}: <a class="address">${addressName}, ${postCode}, ${city}, ${country}</a></h2>
        </div>`
}

export default headTemplate
