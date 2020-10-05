import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col, Button, Form } from "react-bootstrap"
import moment from "moment"
import PropTypes from "prop-types"
import { Formik } from "formik"
import * as Yup from "yup"
import { Loading } from "@components/shared/Loading"
import Sidebar from "@components/Dashboard/Sidebar"
import { Breadcrumb } from "@components/shared/Breadcrumb"
import { getQuotes, addQuote, getServices, getTemplates, getHtml } from "@actions/quote"
import { getProjects, addHistory } from "@actions/project"
import { selectQuotes, loadingQuotes, quotesErrors, selectServices } from "@selectors/quote"
import { saveHtml, htmltopdf } from "@services/quote"
import QuoteCreated from "./QuoteCreated"
import styles from "./Quotes.module.css"
import Editor from "./Editor"
import Sections from "./Add/Sections"
import { serviceAddons } from "@data"
import { selectProject } from "@selectors/project"

class CreateQuote extends Component {
  state = {
    prepend: {},
    templateName: "BasicSiteVisit",
    isModalOpen: false,
    sections: [
      {
        name: "Scope of work",
        services: [serviceAddons],
      },
    ],
  }

  componentDidMount() {
    this.props.getQuotes()
    this.props.getServices()
    this.props.getProjects()
  }

  onPrepend = (e, state, errors) => {
    e.preventDefault()
    if (!Object.keys(errors).length) {
      if (state.sections[0].services[0].id) {
        this.setState({ prepend: state.sections })
      }
    }
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
      loading,
      quotes,
      getTemplates,
      servicesExercises,
      getHtml,
      addHistory,
      addQuote,
      computedMatch,
      project,
    } = this.props
    const { isModalOpen, prepend, templateName } = this.state
    const quoteName = `${computedMatch.params.id}.${moment(new Date()).format("YYMMDD")}.Q${quotes.length + 1}`
    const alphabet = [...Array(26)].map((x, i) => String.fromCharCode(i + 97))

    if (loading) return <Loading />
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
                          <Sections
                            values={values}
                            servicesExercises={servicesExercises}
                            alphabet={alphabet}
                            errors={errors}
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
                {Object.keys(prepend).length ? (
                  <QuoteCreated
                    alphabet={alphabet}
                    prepend={prepend}
                    quoteTemplates={getTemplates}
                    servicesExercises={servicesExercises}
                    toggleModal={this.toggleModal}
                    quoteName={quoteName}
                    templateChange={this.onChange}
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
            project={project}
            quotesLength={quotes.length}
          />
        )}
      </section>
    )
  }
}

CreateQuote.propTypes = {
  prepend: PropTypes.object.isRequired,
  templateName: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  sections: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  quotes: PropTypes.arrayOf(PropTypes.object),
  getHtml: PropTypes.func.isRequired,
  addHistory: PropTypes.func.isRequired,
  addQuote: PropTypes.func.isRequired,
  getTemplates: PropTypes.func.isRequired,
  servicesExercises: PropTypes.arrayOf(PropTypes.object),
  project: PropTypes.object.isRequired,
}

const mapStateToProps = (state, props) => ({
  quotes: selectQuotes(state),
  loading: loadingQuotes(state),
  project: selectProject(state, props.computedMatch.params.id),
  error: quotesErrors(state),
  servicesExercises: selectServices(state),
})

export default connect(mapStateToProps, {
  getQuotes,
  getServices,
  getTemplates,
  getHtml,
  addHistory,
  addQuote,
  getProjects,
})(CreateQuote)
