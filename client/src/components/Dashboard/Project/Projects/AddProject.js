import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { Col, Row, Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { Loading } from "@components/shared/Loading"
import { AdressAutocomplete } from "@components/shared/Fields/AdressAutocomplete/index"
import Sidebar from "@components/Dashboard/Sidebar"
import { TextareaField } from "@components/shared/Fields/TextareaField"
import { TextField } from "@components/shared/Fields/TextField"
import { Breadcrumb } from "@components/shared/Breadcrumb"
import { AutocompleteField } from "@components/shared/Fields/AutocompleteField"
import { getProjects, addProject, addHistory } from "@actions/project"
import { getConsultants } from "@actions/consultant"
import { selectConsultants, loadingConsultants } from "@selectors/consultant"
import { selectAuthorizationFullName, selectAuthorizationId } from "@selectors/authorization"
import { selectLengthOfProjects, selectProjects, projectsErrors } from "@selectors/project"
import { getAddressBooks, addAddressBook } from "@actions/addressbook"
import { selectClients } from "@selectors/addressbook"
import styles from "./Projects.module.css"

class AddProject extends Component {
  state = {
    siteAddressName: "",
    sitePhoneNumber: "",
    description: "",
    addressName: "",
    companyName: "",
    addressBookId: "",
    newClient: false,
    selectedCons: [],
    findClient: "",
    firstName: "",
    lastName: "",
    email1: "",
    phoneNumber1: "",
    errors: {
      companyName: "Company name field is required",
      firstName: "First Name field is required",
      lastName: "Last Name field is required",
      email1: "Email field is required",
      phoneNumber1: "Phone Number field is required",
    },
  }

  componentDidMount() {
    this.props.getProjects()
    this.props.getConsultants()
    this.props.getAddressBooks()
  }

  onChange = e => {
    const { name, value, type, checked } = e.target
    let { selectedCons, errors } = this.state

    switch (name) {
      case "companyName":
        errors.companyName = value ? "" : "Company name field is required"
        break
      case "firstName":
        errors.firstName = value ? "" : "First Name field is required"
        break
      case "lastName":
        errors.lastName = value ? "" : "Last Name field is required"
        break
      case "email1":
        errors.email1 = value ? "" : "Email field is required"
        break
      case "phoneNumber1":
        errors.phoneNumber1 = value ? "" : "Phone Number field is required"
        break
      default:
        break
    }

    this.setState({ errors, [name]: value })

    if (type == "checkbox") {
      if (checked) {
        if (name == "newClient") {
          this.setState({ newClient: true, addressBookId: "" })
        } else {
          this.setState({ selectedCons: [...selectedCons, parseInt(value)] })
        }
      } else {
        if (name == "newClient") {
          this.setState({
            newClient: false,
            findClient: "",
            firstName: "",
            lastName: "",
            email1: "",
            phoneNumber1: "",
            errors: {
              companyName: "Company name field is required",
              firstName: "First Name field is required",
              lastName: "Last Name field is required",
              email1: "Email field is required",
              phoneNumber1: "Phone Number field is required",
            },
          })
        } else {
          this.setState({
            selectedCons: selectedCons.filter(item => item !== parseInt(value)),
          })
        }
      }
    }
  }

  projId = id => Array(Math.max(5 - String(id).length + 1, 0)).join(0) + id

  formatAddress = () => {}

  onSubmit = async e => {
    e.preventDefault()
    let {
      siteAddressName,
      sitePhoneNumber,
      description,
      selectedCons,
      addressBookId,
      addressName,
      newClient,
      companyName,
      firstName,
      lastName,
      email1,
      phoneNumber1,
    } = this.state
    const { addAddressBook, consultantId, clients, history, addProject, addHistory } = this.props

    let generatedAddressBookId = addressBookId
    let generatedAddressName = addressName

    if (!newClient && addressBookId) {
      let { addressName, postCode, city, country } = clients.find(client => client.id == addressBookId)
      generatedAddressName = `${addressName}, ${postCode}, ${city}, ${country}`
    }

    let adddressFormated = addressName.split(",")
    adddressFormated.length == 4 && adddressFormated.splice(1, 1)

    let siteAdddressFormated = siteAddressName.split(",")
    siteAdddressFormated.length == 4 && siteAdddressFormated.splice(1, 1)

    if (!addressBookId) {
      const newAddressBook = await addAddressBook({
        addressName: adddressFormated[0],
        postCode: null,
        city: adddressFormated[1],
        country: adddressFormated[2],
        companyName,
        users: [
          {
            email1,
            firstName,
            lastName,
            phoneNumber1,
            roleId: 1,
          },
        ],
      })

      generatedAddressBookId = newAddressBook.id
    }

    const newProject = await addProject({
      description,
      addressBookId: generatedAddressBookId,
      consultantId,
      sitePhoneNumber,
      siteAddressName: siteAdddressFormated[0],
      sitePostCode: null,
      siteCity: siteAdddressFormated[1],
      siteCountry: siteAdddressFormated[2],
      consultants: selectedCons,
      servicePrices: [],
    })
    await addHistory(newProject.id, { statusId: 1, consultantId })
    history.push(`/dashboard/project/${this.projId(newProject.id)}`)
  }

  render() {
    const { consultants, loading, fullName, clients, error } = this.props
    const {
      siteAddressName,
      sitePhoneNumber,
      description,
      selectedCons,
      newClient,
      addressName,
      companyName,
      firstName,
      lastName,
      email1,
      phoneNumber1,
      errors,
    } = this.state

    if (loading) return <Loading />
    if (!consultants.length) return null

    return (
      <section className="main">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg="11" className="container-left">
            <Breadcrumb />
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6>
                  New Project
                  <a className={styles.href}>&nbsp; by {fullName}</a>
                </h6>
                <Form className={styles.form} noValidate onSubmit={this.onSubmit}>
                  <Row>
                    <FormGroup as={Col}>
                      <AutocompleteField
                        data={clients}
                        label="Find a Client"
                        name="findClient"
                        placeholder="Ex: KP Acoustics"
                        error="Client field is required"
                        setAddressBookId={addressBookId => this.setState({ addressBookId })}
                        disabled={newClient}
                      />
                      <Row>
                        <FormGroup as={Col}>
                          <label className="ms-checkbox-wrap">
                            <FormControl
                              type="checkbox"
                              onChange={this.onChange}
                              className="form-check-input"
                              name="newClient"
                            />
                            <i className="ms-checkbox-check"></i>
                          </label>
                          <span>This is new client?</span>
                        </FormGroup>
                      </Row>
                      {newClient && (
                        <>
                          <TextField
                            name="companyName"
                            label="Company Name"
                            value={companyName}
                            placeholder="Ex: KP Acoustics"
                            onChange={this.onChange}
                            error={errors.companyName}
                          />
                          <AdressAutocomplete
                            label="Address"
                            addressName={addressName}
                            setAddress={addressName => this.setState({ addressName })}
                            error={error && error.data.addressName}
                          />
                          <Row>
                            <Col lg={6}>
                              <TextField
                                name="firstName"
                                label="First Name"
                                value={firstName}
                                placeholder="Ex: John"
                                onChange={this.onChange}
                                error={errors.firstName}
                              />
                            </Col>
                            <Col lg={6}>
                              <TextField
                                name="lastName"
                                label="Last Name"
                                value={lastName}
                                placeholder="Ex: John"
                                onChange={this.onChange}
                                error={errors.lastName}
                              />
                            </Col>
                            <Col lg={6}>
                              <TextField
                                name="email1"
                                label="Email 1"
                                value={email1}
                                placeholder="Ex: email@example.com"
                                onChange={this.onChange}
                                error={errors.email1}
                              />
                            </Col>
                            <Col lg={6}>
                              <TextField
                                name="phoneNumber1"
                                label="Phone Number 1"
                                value={phoneNumber1}
                                placeholder="Ex: 020 8222 8778"
                                onChange={this.onChange}
                                error={errors.phoneNumber1}
                              />
                            </Col>
                          </Row>
                        </>
                      )}
                    </FormGroup>
                  </Row>
                  <Row>
                    <FormGroup as={Col}>
                      <FormLabel>Consultants</FormLabel>
                      {error && <div className="invalid-feedback">{error.data.consultants}</div>}
                      <Row>
                        {consultants.map(({ id, firstName, lastName }) => {
                          const value = selectedCons.find(cons => cons === id)
                          const name = `${firstName} ${lastName}`
                          return (
                            <FormGroup as={Col} md="3">
                              <label className="ms-checkbox-wrap">
                                <FormControl
                                  type="checkbox"
                                  onChange={this.onChange}
                                  className={`form-check-input ${value ? "checked" : ""}`}
                                  name={name}
                                  value={id}
                                  checked={value}
                                />
                                <i className="ms-checkbox-check"></i>
                              </label>
                              <span>{name}</span>
                            </FormGroup>
                          )
                        })}
                      </Row>
                    </FormGroup>
                  </Row>
                  <AdressAutocomplete
                    label="Site Address"
                    addressName={siteAddressName}
                    setAddress={siteAddressName => this.setState({ siteAddressName })}
                    name="siteAddressName"
                    error={error && error.data.siteAddressName}
                  />
                  <TextField
                    name="sitePhoneNumber"
                    label="Site Phone Number"
                    value={sitePhoneNumber}
                    placeholder="Ex: 7869382393"
                    onChange={this.onChange}
                    error={error && error.data.sitePhoneNumber}
                  />
                  <TextareaField
                    name="description"
                    label="Description"
                    value={description}
                    onChange={this.onChange}
                    error={error && error.data.description}
                  />
                  <Row className="justify-content-end">
                    <Col lg={6} className="mt-3">
                      <Button variant="primary" type="submit" className="w-25 float-right">
                        Add
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    )
  }
}

AddProject.propTypes = {}

const mapStateToProps = state => ({
  nextProjectId: selectLengthOfProjects(state),
  consultants: selectConsultants(state),
  loading: loadingConsultants(state),
  error: projectsErrors(state),
  fullName: selectAuthorizationFullName(state),
  consultantId: selectAuthorizationId(state),
  clients: selectClients(state),
})

export default withRouter(
  connect(mapStateToProps, {
    getAddressBooks,
    getProjects,
    addAddressBook,
    getConsultants,
    addProject,
    addHistory,
  })(AddProject)
)
