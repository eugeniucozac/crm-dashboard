const currentConsultantTemplate = consultant => {
  const {
    data: { fullName, title },
  } = consultant
  return `<p class="consultant"><strong>${fullName} ${title}</strong></p>`
}

export default currentConsultantTemplate
