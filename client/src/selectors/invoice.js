export const selectInvoices = state => state.invoice.data
export const loadingInvoices = state => state.invoice.loading
export const invoicesErrors = state => state.invoice.error
export const loadingInvoice = state => state.invoice.loading
export const invoiceErrors = state => state.invoice.error
export const selectInvoice = (state, invoiceId) => state.invoice.data.find(invoice => invoice.InvoiceID == invoiceId)
export const selectInvoicesSearch = (state, query) => {
  const search = query.toLowerCase()
  return state.invoice.data.filter(
    invoice => invoice.InvoiceID.includes(search) || invoice.InvoiceNumber.toLowerCase().includes(search)
  )
}
