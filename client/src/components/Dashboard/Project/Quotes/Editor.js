import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { Button, Modal, ModalBody, Form, ModalFooter } from "react-bootstrap"
import { CheckboxField } from "@components/shared/Fields/CheckboxField"
import KPEditor from "@components/shared/KPEditor"
import {
  getGeneratedQuote,
  resetGeneratedQuote,
  getContentEditor,
  addContentEditor,
  resetContentEditor,
  getQuotePrices,
} from "@actions/quote"
import { selectAuthorization } from "@selectors/authorization"
import { selectGeneratedQuotes, selectContentEditor, selectQuotePrices } from "@selectors/quote"
import headTemplate from "./Templates/head"
import basicQuotesTemplate from "./Templates/basicQuotes"
import basicPriceTemplate from "./Templates/basicPrice"
import totalPriceTemplate from "./Templates/totalPrice"
import currentConsultantTemplate from "./Templates/currentConsultant"
import quotePriceTemplate from "./Templates/quotePrice"
import quoteBlockTemplate from "./Templates/quoteBlock"
import PropTypes from "prop-types"

class Editor extends Component {
  state = {
    pdfConvert: false,
    data: "",
    numberQuote: Math.floor(Math.random() * 1000000),
  }

  onChange = e => {
    const { name, value, checked } = e.target
    this.setState({ [name]: value })
    checked ? this.setState({ pdfConvert: true }) : this.setState({ pdfConvert: false })
  }

  componentDidMount() {
    const { templateName } = this.props
    this.loadTemplate(templateName)
  }

  componentDidUpdate(prevProps) {
    const { templateName } = this.props
    if (templateName !== prevProps.templateName) {
      this.loadTemplate(templateName)
    }
  }

  createTemplate = response => {
    const { createdQuote, quotesLength, alphabet, prices, project, consultant } = this.props
    return response
      .replace('<div class="quote-block"></div>', quoteBlockTemplate(createdQuote, alphabet))
      .replace('<div class="basic-quotes"></div>', basicQuotesTemplate(createdQuote, alphabet))
      .replace('<div class="basic-price"></div>', basicPriceTemplate(createdQuote, alphabet, prices))
      .replace('<div class="head"></div>', headTemplate(project, quotesLength))
      .replace('<div class="quote-price"></div>', quotePriceTemplate(createdQuote, alphabet, prices))
      .replace('<span class="total-price"></span>', totalPriceTemplate(prices))
      .replace('<p class="consultant"><strong></strong></p>', currentConsultantTemplate(consultant))
  }

  loadTemplate(templateName) {
    const { getHtml, addContentEditor } = this.props
    getHtml(templateName).then(response => {
      this.setState({
        data: this.createTemplate(response),
      })
      addContentEditor(this.createTemplate(response))
    })
  }

  onSave = async e => {
    e.preventDefault()
    const {
      saveHtml,
      quoteName,
      htmltopdf,
      hideModal,
      addQuote,
      quotesLength,
      contentEditor,
      resetContentEditor,
      history,
      addHistory,
      createdQuote,
      alphabet,
      prices,
      templateName,
      consultant,
      project: {
        addressBook: { addressName, postCode, city, country },
        id,
      },
    } = this.props

    const { pdfConvert } = this.state

    await addQuote(id.replace(/^0+/, ""), {
      name: quoteName,
      converted: pdfConvert,
      templateName,
      sections: createdQuote.map((section, sectionIndex) => {
        return {
          name: section.name,
          services: section.services.map((service, serviceIndex) => {
            return {
              price: prices[`${alphabet[sectionIndex]}${serviceIndex}`],
              servicePriceId: service.id,
            }
          }),
        }
      }),
    })
    await addHistory(id.replace(/^0+/, ""), { statusId: 2, consultantId: consultant.data.id })
    await saveHtml(quoteName, contentEditor)
    pdfConvert &&
      (await htmltopdf(quoteName, {
        projectId: id,
        quotesLength,
        address: `${addressName}, ${postCode}, ${city}, ${country}`,
      }))
    hideModal(false)
    await resetContentEditor()
    this.setState({ pdfConvert: false })
    history.push(`/dashboard/project/${id}`)
  }

  render() {
    const { data, pdfConvert } = this.state
    const { isModalOpen, hideModal, addContentEditor } = this.props
    return (
      <Modal show={isModalOpen && data} onHide={hideModal} className="editor" centered size="xl">
        <Form noValidate onSubmit={this.onSave}>
          <Modal.Header className="bg-primary" closeButton>
            <h5 className="modal-title has-icon text-white">Editor</h5>
          </Modal.Header>
          <ModalBody>
            <KPEditor data={data} addContentEditor={addContentEditor} />
          </ModalBody>
          <ModalFooter>
            <CheckboxField name="pdfConvert" value={pdfConvert} label="Convert it to PDF?" onChange={this.onChange} />
            <Button variant="primary" className="swal2-styled btn-light" onClick={() => hideModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="swal2-confirm swal2-styled">
              Save
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }
}

Editor.propTypes = {
  data: PropTypes.string.isRequired,
  contentEditor: PropTypes.string.isRequired,
  pdfConvert: PropTypes.bool.isRequired,
  numberQuote: PropTypes.number.isRequired,
  quotesLength: PropTypes.number.isRequired,
  getHtml: PropTypes.func.isRequired,
  consultant: PropTypes.object.isRequired,
  addContentEditor: PropTypes.func.isRequired,
  saveHtml: PropTypes.func.isRequired,
  quoteName: PropTypes.string.isRequired,
  createdQuote: PropTypes.array.isRequired,
  htmltopdf: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  addQuote: PropTypes.func.isRequired,
  addHistory: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  prices: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => ({
  createdQuote: selectGeneratedQuotes(state),
  contentEditor: selectContentEditor(state),
  prices: selectQuotePrices(state),
  consultant: selectAuthorization(state),
})

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getGeneratedQuote,
    resetGeneratedQuote,
    getContentEditor,
    addContentEditor,
    resetContentEditor,
    getQuotePrices,
  })
)(Editor)
