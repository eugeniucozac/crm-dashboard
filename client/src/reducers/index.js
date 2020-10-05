import { combineReducers } from "redux"
import { authorizationReducer } from "@reducers/authorization"
import { consultantReducer } from "@reducers/consultant"
import { roleReducer } from "@reducers/role"
import { hardwareReducer } from "@reducers/hardware"
import { typeReducer } from "@reducers/type"
import { manufactureReducer } from "@reducers/manufacture"
import { modelReducer } from "@reducers/model"
import { kitReducer } from "@reducers/kit"
import { issueReducer } from "@reducers/issue"
import { issueMessageReducer } from "@reducers/message"
import { addressBooksReducer } from "@reducers/addressBook"
import { contactUserReducer } from "@reducers/contactUser"
import { contactUserPositionReducer } from "@reducers/contactUserPosition"
import { projectReducer } from "@reducers/project"
import { projectHistoryReducer } from "@reducers/projectHistory"
import { projectSiteReducer } from "@reducers/projectSite"
import { projectCommentReducer } from "@reducers/projectComment"
import { quoteReducer } from "@reducers/quote"
import { quoteSectionReducer } from "@reducers/quoteSection"
import { quoteExerciseReducer } from "@reducers/quoteExercise"
import { quoteServiceReducer } from "@reducers/quoteService"
import { generatedQuoteReducer } from "@reducers/generatedQuote"
import { contentEditorReducer } from "@reducers/contentEditor"
import { quotePricesReducer } from "@reducers/quotePrices"
import { invoiceReducer } from "@reducers/invoice"

const combineReducer = combineReducers({
  authorization: authorizationReducer,
  consultant: consultantReducer,
  role: roleReducer,
  inventoryHardware: hardwareReducer,
  inventoryType: typeReducer,
  inventoryManufacture: manufactureReducer,
  inventoryModel: modelReducer,
  inventoryKit: kitReducer,
  issue: issueReducer,
  issueMessage: issueMessageReducer,
  project: projectReducer,
  projectSite: projectSiteReducer,
  projectComment: projectCommentReducer,
  projectHistory: projectHistoryReducer,
  quote: quoteReducer,
  generatedQuote: generatedQuoteReducer,
  quoteSection: quoteSectionReducer,
  quoteExercise: quoteExerciseReducer,
  quoteService: quoteServiceReducer,
  quotePrices: quotePricesReducer,
  client: addressBooksReducer,
  contactUser: contactUserReducer,
  invoice: invoiceReducer,
  contentEditor: contentEditorReducer,
  contactUserPosition: contactUserPositionReducer,
})

export default combineReducer
