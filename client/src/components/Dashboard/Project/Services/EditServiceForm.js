import React, { Component } from "react"
import { Button, Form, Col, Row } from "react-bootstrap"
import { Formik } from "formik"
import PropTypes from "prop-types"
import { CheckboxField } from "@components/shared/Fields/CheckboxField"
import { FormikField } from "@components/shared/Fields/FormikField"
import { TextareaField } from "@components/shared/Fields/TextareaField"
import { Addons } from "./Addons"

export class EditServiceForm extends Component {
  state = {
    name: this.props.serviceId.name,
    price: this.props.serviceId.price,
    content: this.props.serviceId.content,
    existingAddons: this.props.serviceId.addons,
    addons: [],
    addonsToDelete: [],
    addOptions: false,
  }

  onChange = e => {
    const { name, value, type, checked } = e.target
    this.setState({ [name]: value })

    if (type === "checkbox") {
      checked ? this.setState({ addOptions: true }) : this.setState({ addOptions: false })
    }
  }

  onChange = (e, serviceId) => {
    const { addonsToDelete } = this.state
    if (e.target.checked) {
      this.setState({ addonsToDelete: [...addonsToDelete, serviceId] })
    } else {
      this.setState({ addonsToDelete: addonsToDelete.filter(addon => addon !== serviceId) })
    }
  }

  onSubmit = async (e, state, resetForm) => {
    e.preventDefault()
    const { updateService, serviceId, hideService } = this.props
    const { name, price } = state
    const { addons, content, addOptions } = this.state
    await updateService(serviceId.id, { name, price, content, addons })
    await hideService(null)
  }

  render() {
    const { addOptions, name, price, content } = this.state
    const { error, hideService } = this.props

    return (
      <div className="ms-panel">
        <div className="ms-panel-header">
          <h6>Edit Service</h6>
        </div>
        <div className="ms-panel-body">
          <Formik initialValues={this.state}>
            {({ values, resetForm }) => (
              <Form noValidate onSubmit={e => this.onSubmit(e, values, resetForm)}>
                <FormikField
                  name="name"
                  label="Name"
                  value={name}
                  placeholder="Ex: Site Visit"
                  error={error && error.data.name}
                />
                <FormikField
                  name="price"
                  label="Price"
                  value={price}
                  placeholder="Ex: 400"
                  error={error && error.data.price}
                />
                <TextareaField
                  name="content"
                  label="Content"
                  value={content}
                  onChange={this.onChange}
                  rows="15"
                  error={error && error.data.content}
                />
                <CheckboxField name="addOptions" label="Add Options?" onChange={this.onChange} />
                {addOptions && <Addons values={values} error={error} />}
                <Row>
                  <Col className="mt-3">
                    <Button variant="primary" type="submit" className="w-25 float-right">
                      Update
                    </Button>
                    <Button className="btn btn-primary w-25 mr-1 float-right" onClick={() => hideService(null)}>
                      Cancel
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

EditServiceForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  addOptions: PropTypes.bool.isRequired,
  existingAddons: PropTypes.array.isRequired,
  addons: PropTypes.array.isRequired,
  addonsToDelete: PropTypes.array.isRequired,
  serviceId: PropTypes.number.isRequired,
  error: PropTypes.object,
  updateService: PropTypes.func.isRequired,
  hideService: PropTypes.func.isRequired,
}
