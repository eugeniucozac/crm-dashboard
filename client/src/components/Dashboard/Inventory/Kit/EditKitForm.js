import React, { Component } from "react"
import { Col, Row, Form, Button } from "react-bootstrap"
import { TextField } from "@components/shared/Fields/TextField"
import { NextCalibration } from "@components/shared/Fields/NextCalibration"
import { CheckboxField } from "@components/shared/Fields/CheckboxField"
import moment from "moment"
import PropTypes from "prop-types"

export class EditKitForm extends Component {
  state = {
    calibrationAlert: [],
    isFaulty: this.props.kitToEdit.isFaulty,
    calibrationNumber: this.props.kitToEdit.calibrationNumber,
    calibrationCurDate: moment(this.props.kitToEdit.calibrationCurDate).format("YYYY-MM-DD"),
    calibrationDueDate: this.props.kitToEdit.calibrationDueDate,
    selectedOption:
      parseInt(moment(this.props.kitToEdit.calibrationDueDate).format("YYYY")) -
      parseInt(moment(this.props.kitToEdit.calibrationCurDate).format("YYYY")),
  }

  componentDidMount() {
    const getCurrentDate = new Date()
    const { kits } = this.props

    kits.map(item => {
      const difference = new Date(item.calibrationDueDate) - getCurrentDate
      const toDays = difference / (60 * 60 * 24 * 1000)
      if (toDays < 14 && toDays > 0) {
        this.setState(prevState => ({
          calibrationAlert: [...prevState.calibrationAlert, item],
        }))
      }
    })
  }

  onChange = e => {
    const { name, value, type, checked } = e.target
    this.setState({ [name]: value })

    if (type === "checkbox") {
      checked ? this.setState({ isFaulty: true }) : this.setState({ isFaulty: false })
    }

    if (name === "calibrationDueDate") {
      this.setState({ selectedOption: value })
    }
  }

  onSubmit = async e => {
    e.preventDefault()
    const getCurrentDate = new Date()
    const { calibrationCurDate, calibrationNumber, isFaulty, calibrationAlert, selectedOption } = this.state
    const {
      kitToEdit: { id },
      sendCalibrationNotification,
      updateKit,
      hideKit,
    } = this.props
    let formatedDate = moment(calibrationCurDate, "YYYY-MM-DD").add(selectedOption, "years").format("YYYY-MM-DD")

    if (calibrationAlert.find(item => item.id === id)) {
      const difference = new Date(formatedDate) - getCurrentDate
      const toDays = difference / (60 * 60 * 24 * 1000)
      if (toDays < 14 && toDays > 0) {
        sendCalibrationNotification()
      }
    }

    try {
      await updateKit(id, {
        calibrationNumber,
        isFaulty,
        calibrationCurDate,
        calibrationDueDate: formatedDate,
      })
      await hideKit(null)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { isFaulty, calibrationNumber, calibrationCurDate, selectedOption } = this.state
    const { error, hideKit } = this.props
    return (
      <>
        <div className="ms-panel-header">
          <h6>Edit kit</h6>
        </div>
        <div className="ms-panel-body">
          <Form noValidate onSubmit={this.onSubmit}>
            <CheckboxField name="isFaulty" value={isFaulty} label="Item is is faulty" onChange={this.onChange} />
            <TextField
              name="calibrationNumber"
              value={calibrationNumber}
              label="Calibration Number"
              placeholder="Ex: 8932435654"
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
              value={selectedOption}
              placeholder="Ex: Date"
              onChange={this.onChange}
              error={error && error.data.calibrationDueDate}
            />
            <Row>
              <Col>
                <Button type="submit" className="w-25 float-right">
                  Update
                </Button>
                <Button className="btn btn-primary w-25 mr-1 float-right" onClick={() => hideKit(null)}>
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

EditKitForm.propTypes = {
  isFaulty: PropTypes.bool.isRequired,
  calibrationAlert: PropTypes.arrayOf(PropTypes.object),
  kits: PropTypes.arrayOf(PropTypes.object),
  calibrationNumber: PropTypes.string.isRequired,
  calibrationCurDate: PropTypes.instanceOf(Date).isRequired,
  calibrationDueDate: PropTypes.instanceOf(Date).isRequired,
  getHardwares: PropTypes.func.isRequired,
  selectedOption: PropTypes.number.isRequired,
  sendCalibrationNotification: PropTypes.func.isRequired,
  updateKit: PropTypes.func.isRequired,
  hideKit: PropTypes.func.isRequired,
  error: PropTypes.string,
}
