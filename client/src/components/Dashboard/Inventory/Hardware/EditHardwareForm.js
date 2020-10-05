import React, { Component } from "react"
import { Col, Row, Form, Button } from "react-bootstrap"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"

export class EditHardwareForm extends Component {
  state = {
    id: this.props.hardwareToEdit.id,
    serialNumber: this.props.hardwareToEdit.serialNumber,
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { updateHardware, hideHardware } = this.props
    const { id, serialNumber } = this.state
    try {
      await updateHardware(id, { serialNumber })
      await hideHardware(null)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { serialNumber } = this.state
    const { error, hideHardware } = this.props

    return (
      <>
        <div className="ms-panel-header">
          <h6>Edit hardware</h6>
        </div>
        <div className="ms-panel-body">
          <Form noValidate onSubmit={this.onSubmit}>
            <TextField
              name="serialNumber"
              value={serialNumber}
              label="Serial Number"
              placeholder="Ex: 8932"
              onChange={this.onChange}
              error={error && error.data.serialNumber}
            />
            <Row>
              <Col>
                <Button variant="primary" type="submit" className="w-25 float-right">
                  Update
                </Button>
                <Button className="btn btn-primary w-25 mr-1 float-right" onClick={() => hideHardware(null)}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    )
  }
}

EditHardwareForm.propTypes = {
  id: PropTypes.number.isRequired,
  serialNumber: PropTypes.string.isRequired,
  updateHardware: PropTypes.func.isRequired,
  hideHardware: PropTypes.func.isRequired,
  error: PropTypes.string,
}
