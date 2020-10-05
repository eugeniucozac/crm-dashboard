export const selectQuotes = state => state.quote.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
export const loadingQuotes = state => state.quote.loading
export const quotesErrors = state => state.quote.error
export const selectServices = state => state.quoteService.data
export const loadingServices = state => state.quoteService.loading
export const servicesErrors = state => state.quoteService.error
export const selectGeneratedQuotes = state => state.generatedQuote.data
export const selectContentEditor = state => state.contentEditor.data
export const selectQuotePrices = state => state.quotePrices.data
export const selectQuote = (state, quoteName) => state.quote.data.find(quote => quote.name === quoteName)
