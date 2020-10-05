import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col, Button, Form, FormControl, FormGroup } from "react-bootstrap"
import { Formik, FieldArray, Field } from "formik"
import { FaPoundSign } from "react-icons/fa"
import { addGeneratedQuote, addQuotePrices } from "@actions/quote"
import styles from "./Quotes.module.css"
import PropTypes from "prop-types"

class QuoteCreated extends Component {
  state = {
    total: 0,
    content: "",
    quoteTemplates: [],
  }

  async componentDidMount() {
    const quoteTemplates = await this.props.quoteTemplates()
    this.setState({ quoteTemplates })
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onCreate = (e, state) => {
    e.preventDefault()
    this.setState({ prepend: state.sections })
  }

  openEditor = async (e, values) => {
    e.preventDefault()
    const { toggleModal, addGeneratedQuote, servicesExercises, prepend, addQuotePrices, templateName } = this.props

    const context = prepend.map((sections, indexSection) => {
      const filteredServices = sections.services.map((service, indexService) => {
        const servicesExercise = servicesExercises.find(item => item.id == service.id)
        const addonsFiltered =
          servicesExercises.addons && servicesExercises.addons.filter(addon => service.addons.includes(addon.id))
        return {
          id: servicesExercise.id,
          name: servicesExercise.name,
          content: servicesExercise.content,
          price: servicesExercise.price,
          indexService,
          indexSection,
          addons: addonsFiltered,
        }
      })
      return { ...sections, services: filteredServices }
    })

    await addQuotePrices(values.quoteServices)
    await addGeneratedQuote(context)
    await toggleModal(true)
  }

  render() {
    const {
      prepend,
      servicesExercises,
      alphabet,
      templateName,
      addGeneratedQuote,
      addQuotePrices,
      templateChange,
    } = this.props
    const { quoteTemplates } = this.state
    const getData = () => {
      let obj = {}
      prepend.map(({ services }, indexSection) => {
        //console.log(services)
        return services.map((service, indexService) => {
          const services = servicesExercises.find(item => item.id == service.id)

          obj = { ...obj, [`${alphabet[indexSection]}${indexService}`]: services.price.toString() }
        })
      })

      // console.log(obj)

      /*
      {a0: "980", a1: "980"}
      */

      /*
      {id: 18, name: "Architectural Acoustics", price: 400, content: null, addons: Array(3)}
      {id: 23, name: "Eugene Cozac", price: 1600, content: null, addons: Array(0)}
      */

      /*
      const temp = prepend.map(({ services }, indexSection) => {
        return services.map((service, indexService) => {
          return servicesExercises
            .filter(item => item.id == service.id)
            .reduce((acc, service) => {
              acc[`${alphabet[indexSection]}${indexService}`] = service.price.toString()
              return acc
            }, {})
        })
      }) */

      //console.log(prepend)

      return { quoteServices: { ...obj } }
    }

    // const test = getData()

    //  console.log(test)

    return (
      <div className="ms-panel">
        <div className="ms-panel-body">
          <h6 className="mb-3">Generate a Quote</h6>
          <Formik initialValues={getData()} enableReinitialize={true}>
            {({ errors, values }) => (
              <Form noValidate onSubmit={e => this.openEditor(e, values, errors)}>
                {prepend.map(({ name, services }, indexSection) => (
                  <>
                    <Row className="section mt-2 mb-1">
                      <Col>
                        <p>
                          Section {alphabet[indexSection].toUpperCase()}: {name}
                        </p>
                      </Col>
                    </Row>
                    <FieldArray
                      name={`sections.${indexSection}.services`}
                      render={() => {
                        return (
                          <>
                            {services.map((service, indexService) => {
                              const { name, price, addons } = servicesExercises.find(item => item.id == service.id)
                              return (
                                <>
                                  <Row className="service mt-2">
                                    <Col lg="9">
                                      <p>
                                        Service {alphabet[indexSection].toUpperCase()}.{indexService + 1}: {name}
                                      </p>
                                    </Col>
                                    <Col lg="3">
                                      <Row>
                                        <Col lg="9">
                                          <Field
                                            name={`quoteServices.${alphabet[indexSection]}${indexService}`}
                                            className="form-control"
                                            type="text"
                                            defaultValue={price}
                                          />
                                        </Col>
                                        <Col lg="1" className={styles.sign}>
                                          <FaPoundSign />
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                  {addons
                                    .filter(addon => service.addons.includes(addon.id))
                                    .map((addon, indexAddon) => {
                                      return (
                                        <FormGroup as={Row} className="mb-0">
                                          <Col>
                                            <p>
                                              <i>
                                                Service
                                                {alphabet[indexSection].toUpperCase()}.{indexService + 1}.
                                                {indexAddon + 1} {addon.name}
                                              </i>
                                            </p>
                                          </Col>
                                        </FormGroup>
                                      )
                                    })}
                                </>
                              )
                            })}
                          </>
                        )
                      }}
                    />
                  </>
                ))}
                <Row className="my-3">
                  <Col lg="3">
                    <p>Choose quote template</p>
                  </Col>
                  <Col lg="9">
                    {quoteTemplates.length && (
                      <FormControl
                        as="select"
                        name="templateName"
                        defaultValue={templateName}
                        onChange={templateChange}
                      >
                        {quoteTemplates.map((template, id) => (
                          <option key={id} value={template}>
                            {template}
                          </option>
                        ))}
                      </FormControl>
                    )}
                  </Col>
                </Row>
                <Row className="justify-content-end">
                  <Col lg={6}>
                    <Button variant="primary" type="submit" className="w-50 float-right">
                      Open/Change Quote
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  }
}

QuoteCreated.propTypes = {
  total: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  quoteTemplates: PropTypes.array.isRequired,
  servicesExercises: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func.isRequired,
  addGeneratedQuote: PropTypes.func.isRequired,
  addQuotePrices: PropTypes.func.isRequired,
  prepend: PropTypes.arrayOf(PropTypes.object),
}

export default connect(null, {
  addGeneratedQuote,
  addQuotePrices,
})(QuoteCreated)
