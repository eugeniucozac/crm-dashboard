import React, { Component } from "react"
import { Button, Form, Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"

export class ManufactureForm extends Component {
  state = {
    name: "",
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  componentWillUnmount() {
    this.props.resetManufactureErrors()
  }

  onSubmit = async e => {
    e.preventDefault()
    const { addManufacture } = this.props
    const { name } = this.state
    await addManufacture({ name })
    this.setState({ name: "" })
  }

  render() {
    const { name } = this.state
    const { error } = this.props

    return (
      <Form noValidate onSubmit={this.onSubmit}>
        <TextField
          name="name"
          value={name}
          label="Name"
          placeholder="Ex: Preamp Svantek"
          onChange={this.onChange}
          error={error && error.data.name}
        />
        <Row>
          <Col>
            <Button variant="primary" type="submit" className="w-25 float-right">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

ManufactureForm.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  addManufacture: PropTypes.func.isRequired,
}
