import React, { Component } from "react"
import { Button, Col, Row, Form } from "react-bootstrap"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"
import { NextCalibration } from "@components/shared/Fields/NextCalibration"
import { MultiplyHardware } from "@components/shared/MultiplyHardware"

export class KitForm extends Component {
  state = {
    calibrationCurDate: "",
    calibrationDueDate: "",
    name: "",
    calibrationNumber: "",
    hardwares: [],
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onHardwaresChange = hardwares => {
    this.setState({ hardwares })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { calibrationCurDate, calibrationDueDate, name, calibrationNumber, hardwares } = this.state
    const { addKit } = this.props
    let addNexCalibration = new Date(calibrationCurDate)
    const dateFormated = new Date(
      addNexCalibration.setFullYear(addNexCalibration.getFullYear() + parseInt(calibrationDueDate))
    )

    await addKit({
      name,
      calibrationNumber,
      calibrationCurDate,
      calibrationDueDate: `${dateFormated.getFullYear()}-${dateFormated.getMonth() + 1}-${dateFormated.getDate()}`,
      isFaulty: false,
      hardwares,
    })
    this.setState({
      name: "",
      calibrationNumber: "",
      calibrationCurDate: "",
      calibrationDueDate: false,
    })
  }

  render() {
    const { name, calibrationNumber, calibrationCurDate, calibrationDueDate } = this.state
    const { error, hardwaresItems } = this.props

    return (
      <>
        <div className="ms-panel-header">
          <h6>Add kit</h6>
        </div>
        <div className="ms-panel-body">
          <Form noValidate onSubmit={this.onSubmit}>
            <TextField
              name="name"
              value={name}
              label="Name"
              placeholder="Ex: Kit"
              onChange={this.onChange}
              error={error && error.data.name}
            />
            <MultiplyHardware label="Hardwares" optionsData={hardwaresItems} onChange={this.onHardwaresChange} />
            <TextField
              name="calibrationNumber"
              value={calibrationNumber}
              label="Calibration Number"
              placeholder="Ex: Calibration Number"
              onChange={this.onChange}
              error={error && error.data.calibrationNumber}
            />
            <TextField
              name="calibrationCurDate"
              type="date"
              value={calibrationCurDate}
              label="Current Calibation Date"
              placeholder="Ex: Date"
              onChange={this.onChange}
              error={error && error.data.calibrationCurDate}
            />
            <NextCalibration
              name="calibrationDueDate"
              label="Next Calibration"
              value={calibrationDueDate}
              placeholder="Ex: Date"
              onChange={this.onChange}
              error={error && error.data.calibrationDueDate}
            />
            <Row>
              <Col>
                <Button variant="primary" type="submit" className="w-25 float-right">
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    )
  }
}

KitForm.propTypes = {
  name: PropTypes.string.isRequired,
  calibrationNumber: PropTypes.string.isRequired,
  calibrationCurDate: PropTypes.instanceOf(Date),
  calibrationDueDate: PropTypes.instanceOf(Date),
  hardwares: PropTypes.arrayOf(PropTypes.object),
  addKit: PropTypes.func.isRequired,
  error: PropTypes.object,
  hardwaresItems: PropTypes.object.isRequired,
}
