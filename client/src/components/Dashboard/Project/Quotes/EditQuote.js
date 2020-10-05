import React, { Component, Fragment } from "react"
import { Row, Col, Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { FaTimes, FaPlus } from "react-icons/fa"
import { Formik, FieldArray, Field } from "formik"
import { connect } from "react-redux"
import { getQuotes, getServices, getTemplates, addGeneratedQuote, addQuotePrices, getHtml } from "@actions/quote"
import { selectQuote, selectQuotes, loadingQuotes, selectServices, loadingServices } from "@selectors/quote"
import { saveHtml, htmltopdf } from "@services/quote"
import { getProjects, addHistory } from "@actions/project"
import { Loading } from "@components/shared/Loading"
import Sidebar from "../../Sidebar"
import { Breadcrumb } from "@components/shared/Breadcrumb"
import QuoteCreated from "./QuoteCreated"
import styles from "./Quotes.module.css"
import Editor from "./Editor"
import * as Yup from "yup"

class EditQuote extends Component {
  state = {
    prepend: {},
    templateName: this.props.quote.templateName,
    isModalOpen: false,
    sections: this.props.quote.sections.map(section => {
      return {
        name: section.name,
        services: section.services.map(service => {
          return {
            id: service.servicePrice.id,
            addons: [],
          }
        }),
      }
    }),
  }

  componentDidMount() {
    const { sections } = this.props.quote
    this.props.getQuotes()
    this.props.getServices()

    this.setState({
      prepend: sections.map(section => {
        return {
          name: section.name,
          services: section.services.map(service => {
            return {
              id: service.servicePrice.id,
              addons: [],
            }
          }),
        }
      }),
    })
  }

  onPrepend = (e, state, errors) => {
    e.preventDefault()
    !Object.keys(errors).length && state.sections[0].services[0].id && this.setState({ prepend: state.sections })
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  toggleModal = isModalOpen => {
    this.setState({ isModalOpen })
  }

  render() {
    const {
      loadingQuotes,
      quotes,
      servicesExercises,
      getTemplates,
      getHtml,
      addHistory,
      addQuote,
      computedMatch,
    } = this.props
    const { isModalOpen, prepend, quoteName, templateName } = this.state
    const alphabet = [...Array(26)].map((x, i) => String.fromCharCode(i + 97))

    if (loadingQuotes) return <Loading />
    return (
      <section className="main">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg="11" className="container-left">
            <Breadcrumb />
            <Row>
              <Col>
                <div className="ms-panel">
                  <div className="ms-panel-body">
                    <h6>Create a Quote</h6>
                    <Formik
                      initialValues={this.state}
                      validationSchema={Yup.object().shape({
                        sections: Yup.array().of(
                          Yup.object().shape({
                            name: Yup.string().required("Section name is required"),
                            services: Yup.array().of(
                              Yup.object().shape({
                                id: Yup.number().required("Id is required"),
                              })
                            ),
                          })
                        ),
                      })}
                    >
                      {({ errors, values }) => (
                        <Form
                          noValidate
                          onChange={this.onChange}
                          className={styles.form}
                          onSubmit={e => this.onPrepend(e, values, errors)}
                        >
                          <FieldArray
                            name="sections"
                            render={({ remove, push }) => (
                              <>
                                {values.sections.length > 0 &&
                                  values.sections.map((section, indexSection) => {
                                    return (
                                      <Fragment key={indexSection}>
                                        <FormGroup as={Row}>
                                          <Col lg={10}>
                                            <Row>
                                              <FormLabel column lg="2">
                                                Section {alphabet[indexSection].toUpperCase()}
                                              </FormLabel>
                                              <Col lg="10">
                                                <Field
                                                  type="text"
                                                  placeholder="Post-tender acoustic monitoring"
                                                  className={`form-control ${
                                                    errors.sections &&
                                                    errors.sections[indexSection] &&
                                                    errors.sections[indexSection].name
                                                      ? "is-invalid"
                                                      : ""
                                                  }`}
                                                  name={`sections.${indexSection}.name`}
                                                />
                                              </Col>
                                            </Row>
                                          </Col>
                                          <Col lg={2}>
                                            {indexSection === 0 ? (
                                              <Button
                                                onClick={() =>
                                                  push({
                                                    name: "",
                                                    price: null,
                                                    statusId: 1,
                                                    services: [
                                                      {
                                                        id: null,
                                                        addons: [],
                                                      },
                                                    ],
                                                  })
                                                }
                                                className="btn btn-success mt-0 w-100"
                                                name="button"
                                              >
                                                <FaPlus />
                                              </Button>
                                            ) : (
                                              <Button
                                                onClick={() => remove(indexSection)}
                                                className="btn btn-danger mt-0 w-100"
                                                name="button"
                                              >
                                                <FaTimes />
                                              </Button>
                                            )}
                                          </Col>
                                        </FormGroup>
                                        <FieldArray
                                          name={`sections.${indexSection}.services`}
                                          render={({ remove, push, replace }) => (
                                            <>
                                              {section.services.length > 0 &&
                                                section.services.map((service, indexService) => {
                                                  return (
                                                    <Fragment key={indexService}>
                                                      <FormGroup as={Row}>
                                                        <Col lg={10}>
                                                          <Row>
                                                            <FormLabel column lg="2">
                                                              Service {alphabet[indexSection].toUpperCase()}.
                                                              {indexService + 1}
                                                            </FormLabel>
                                                            <Col lg="10">
                                                              <Field
                                                                as="select"
                                                                name={`sections.${indexSection}.services.${indexService}.id`}
                                                                className={`form-control ${
                                                                  errors.sections &&
                                                                  errors.sections[indexSection] &&
                                                                  errors.sections[indexSection].services &&
                                                                  errors.sections[indexSection].services[indexService]
                                                                    ? "is-invalid"
                                                                    : ""
                                                                }`}
                                                              >
                                                                <option>Select Service</option>
                                                                {servicesExercises.map(serviceEx => {
                                                                  return (
                                                                    <>
                                                                      <option key={serviceEx.id} value={serviceEx.id}>
                                                                        {serviceEx.name} {serviceEx.price} £
                                                                      </option>
                                                                    </>
                                                                  )
                                                                })}
                                                              </Field>
                                                            </Col>
                                                          </Row>
                                                        </Col>
                                                        <Col lg={2}>
                                                          {indexService === 0 ? (
                                                            <Button
                                                              onClick={() =>
                                                                push({
                                                                  id: null,
                                                                  addons: [],
                                                                })
                                                              }
                                                              className="btn btn-success mt-0 w-100"
                                                              name="button"
                                                            >
                                                              <FaPlus />
                                                            </Button>
                                                          ) : (
                                                            <Button
                                                              onClick={() => remove(indexService)}
                                                              className="btn btn-danger mt-0 w-100"
                                                              name="button"
                                                            >
                                                              <FaTimes />
                                                            </Button>
                                                          )}
                                                        </Col>
                                                      </FormGroup>
                                                      <FieldArray
                                                        name={`sections.${indexSection}.services.${indexService}.addons`}
                                                        render={
                                                          (remove,
                                                          push,
                                                          replace => (
                                                            <>
                                                              {servicesExercises.map(servicesExercise => {
                                                                if (servicesExercise.id == service.id) {
                                                                  return servicesExercise.addons.map(
                                                                    (addon, indexAddon) => (
                                                                      <FormGroup as={Row}>
                                                                        <Col lg={1}>
                                                                          <i>
                                                                            {alphabet[indexSection].toUpperCase()}.
                                                                            {indexService + 1}.{indexAddon + 1}
                                                                          </i>
                                                                        </Col>
                                                                        <Col lg={10}>
                                                                          <Field
                                                                            render={arrayHelpers => {
                                                                              return (
                                                                                <FormGroup
                                                                                  as={Col}
                                                                                  className="mb-0 ml-4"
                                                                                >
                                                                                  <label className="ms-checkbox-wrap">
                                                                                    <FormControl
                                                                                      type="checkbox"
                                                                                      name={`sections.${indexSection}.services.${indexService}.addons.${indexAddon}`}
                                                                                      className="form-check-input"
                                                                                      onChange={e => {
                                                                                        var data =
                                                                                          arrayHelpers.field.value
                                                                                            .sections[indexSection]
                                                                                            .services[indexService]
                                                                                            .addons
                                                                                        if (e.target.checked) {
                                                                                          data.push(addon.id)
                                                                                        } else {
                                                                                          const idx = data.indexOf(
                                                                                            addon.id
                                                                                          )
                                                                                          data.splice(idx, 1)
                                                                                        }
                                                                                      }}
                                                                                    />
                                                                                    <i className="ms-checkbox-check"></i>
                                                                                  </label>
                                                                                  <span>{addon.name}</span>
                                                                                </FormGroup>
                                                                              )
                                                                            }}
                                                                          />
                                                                        </Col>
                                                                      </FormGroup>
                                                                    )
                                                                  )
                                                                }
                                                              })}
                                                            </>
                                                          ))
                                                        }
                                                      />
                                                    </Fragment>
                                                  )
                                                })}
                                            </>
                                          )}
                                        />
                                      </Fragment>
                                    )
                                  })}
                              </>
                            )}
                          />
                          <Row className="justify-content-end">
                            <Col lg={9}>
                              <Button variant="primary" type="submit" className="w-25 float-right">
                                Create/Update
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </Col>
              <Col>
                {Object.keys(prepend).length && servicesExercises.length ? (
                  <QuoteCreated
                    alphabet={alphabet}
                    prepend={prepend}
                    quoteTemplates={getTemplates}
                    servicesExercises={servicesExercises}
                    toggleModal={this.toggleModal}
                    quoteName={quoteName}
                    onChange={this.onChange}
                    addGeneratedQuote={addGeneratedQuote}
                    addQuotePrices={addQuotePrices}
                    templateName={templateName}
                  />
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        {isModalOpen && (
          <Editor
            hideModal={this.toggleModal}
            isModalOpen={isModalOpen}
            saveHtml={saveHtml}
            getHtml={getHtml}
            htmltopdf={htmltopdf}
            addHistory={addHistory}
            alphabet={alphabet}
            addQuote={addQuote}
            quoteName={quoteName}
            templateName={templateName}
            projectId={computedMatch.params.projectId}
            quotesLength={quotes.length}
          />
        )}
      </section>
    )
  }
}

EditQuote.propTypes = {}

const mapStateToProps = (state, props) => {
  return {
    quotes: selectQuotes(state),
    quote: selectQuote(state, props.computedMatch.params.quoteName),
    loadingQuotes: loadingQuotes(state),
    loadingServices: loadingServices(state),
    servicesExercises: selectServices(state),
  }
}

export default connect(mapStateToProps, { getQuotes, getServices, getTemplates, getHtml, getProjects })(EditQuote)
