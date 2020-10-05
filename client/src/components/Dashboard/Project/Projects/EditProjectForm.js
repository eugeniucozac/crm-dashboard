import React, { Component } from "react"
import { Col, Row, Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { TextareaField } from "@components/shared/Fields/TextareaField"
import { TextField } from "@components/shared/Fields/TextField"
import styles from "./Projects.module.css"
import PropTypes from "prop-types"
import { AdressAutocomplete } from "@components/shared/Fields/AdressAutocomplete/index"

class EditProjectForm extends Component {
  state = {
    siteAddressName: this.props.project.site.addressName,
    sitePhoneNumber: this.props.project.site.phoneNumber,
    description: this.props.project.description,
    selectedConsultants: this.props.project.consultants.map(item => item.id),
  }

  onChange = e => {
    const { name, value, type, checked } = e.target
    this.setState({ [name]: value })
    const { selectedConsultants } = this.state
    if (type === "checkbox") {
      checked
        ? this.setState({ selectedConsultants: [...selectedConsultants, parseInt(value)] })
        : this.setState({
            selectedConsultants: selectedConsultants.filter(item => item !== parseInt(value)),
          })
    }
  }

  onSubmit = async e => {
    e.preventDefault()
    const { siteAddressName, sitePhoneNumber, description, selectedConsultants } = this.state
    const {
      updateProject,
      project: { customId, id },
      history,
    } = this.props

    try {
      await updateProject(customId, {
        consultants: selectedConsultants,
        description,
        sitePhoneNumber,
        siteAddressName,
      })
      history.push(`/dashboard/project/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { project, consultants, error } = this.props
    const { siteAddressName, sitePhoneNumber, description, selectedConsultants } = this.state

    return (
      <>
        <h6>
          Project {project.id}
          <a className={styles.href}>
            &nbsp; by {project.consultant.firstName} {project.consultant.lastName}
          </a>
        </h6>
        <Form className={styles.form} noValidate onSubmit={this.onSubmit}>
          <TextField
            name="companyName"
            label="Company Name"
            value={project.addressBook.companyName}
            placeholder="Ex: Intel"
            onChange={this.onChange}
            disabled
          />
          <TextField
            name="addressName"
            label="Address Name"
            value={project.addressBook.addressName}
            placeholder="Ex: 33 Holborn, London, UK"
            onChange={this.onChange}
            disabled
          />
          <Row>
            <FormGroup as={Col}>
              <FormLabel>Consultants</FormLabel>
              {error && <div className="invalid-feedback">{error.data.consultants}</div>}
              <Row>
                {consultants.map(({ id, firstName, lastName }) => {
                  const value = selectedConsultants.find(cons => cons === id)
                  const name = `${firstName} ${lastName}`
                  return (
                    <FormGroup as={Col} md="3">
                      <label className="ms-checkbox-wrap">
                        <FormControl
                          type="checkbox"
                          onChange={this.onChange}
                          className="form-check-input"
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
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    )
  }
}

EditProjectForm.propTypes = {
  siteAddressName: PropTypes.string.isRequired,
  sitePhoneNumber: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selectedConsultants: PropTypes.arrayOf(PropTypes.object),
  consultants: PropTypes.arrayOf(PropTypes.object),
  project: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
}

export default EditProjectForm
