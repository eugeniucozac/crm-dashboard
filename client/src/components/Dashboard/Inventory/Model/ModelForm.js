import React, { Component } from "react"
import { Button, Col, Row, Form } from "react-bootstrap"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"
import { SelectField } from "@components/shared/Fields/SelectField"

export class ModelForm extends Component {
  state = {
    name: "",
    manufactureId: null,
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  componentWillUnmount() {
    this.props.resetModelErrors()
  }

  onSubmit = async e => {
    e.preventDefault()
    const { addModel } = this.props
    const { name, manufactureId } = this.state
    await addModel({ name, manufactureId })
    this.setState({ name: "", manufactureId: "" })
  }

  render() {
    const { name, manufactureId } = this.state
    const { error, manufactures } = this.props
    return (
      <Form noValidate onSubmit={this.onSubmit}>
        <TextField
          name="name"
          value={name}
          label="Name"
          placeholder="Ex: MR-PRO"
          onChange={this.onChange}
          error={error && error.data.name}
        />
        <SelectField
          name="manufactureId"
          label="Manufacture"
          value={manufactureId}
          onChange={this.onChange}
          hardwares={manufactures}
          error={error && error.data.manufactureId}
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

ModelForm.propTypes = {
  name: PropTypes.string.isRequired,
  manufactureId: PropTypes.number.isRequired,
  error: PropTypes.string,
  manufactures: PropTypes.arrayOf(PropTypes.object),
  addModel: PropTypes.func.isRequired,
}
