import React, { Component } from "react"
import { Button, Col, Row, Form } from "react-bootstrap"
import { TextField } from "@components/shared/Fields/TextField"
import { SelectField } from "@components/shared/Fields/SelectField"
import { ModalAdd } from "@components/shared/ModalAdd"
import PropTypes from "prop-types"

export class HardwareForm extends Component {
  state = {
    isModalOpen: "",
    getState: "",
    typeName: "",
    manufactureName: "",
    modelName: "",
    filterModel: 0,
    models: this.props.models,
    errors: "",
  }

  onChange = e => {
    const { models } = this.props
    const { manufactureId } = this.state
    const { name, value, options, selectedIndex } = e.target
    if (name === "typeId") {
      this.setState({ type: options[selectedIndex].text })
    }
    if (name === "manufactureId") {
      this.setState({
        manufacture: options[selectedIndex].text,
        models: options[selectedIndex].value
          ? models.filter(model => model.manufactureId == options[selectedIndex].value)
          : models,
      })
    }
    if (name === "modelId") {
      this.setState({ model: options[selectedIndex].text })
    }
    this.setState({
      [name]: value,
      filterModel: manufactureId,
    })
  }

  toggleModal = (name, state) => {
    this.setState(prevState => {
      return prevState.isModalOpen
        ? {
            isModalOpen: "",
            getState: "",
            errors: "",
          }
        : {
            isModalOpen: name,
            getState: state,
            errors: "",
          }
    })
  }

  addNewType = async e => {
    e.preventDefault()
    const { type } = this.state
    const { addType } = this.props
    try {
      await addType({ name: type })
      this.setState({
        isModalOpen: "",
      })
    } catch (error) {
      console.error(error)
    }
  }

  addNewModel = async e => {
    e.preventDefault()
    const { model, manufactureId } = this.state
    const { addModel } = this.props
    try {
      await addModel({
        name: model,
        manufactureId,
      })
      this.setState({
        isModalOpen: "",
      })
    } catch (error) {
      console.error(error)
    }
  }

  addNewManufacture = async e => {
    e.preventDefault()
    const { manufacture } = this.state
    const { addManufacture } = this.props
    try {
      await addManufacture({
        name: manufacture,
      })
      this.setState({
        isModalOpen: "",
      })
    } catch (error) {
      console.error(error)
    }
  }

  onSubmit = async e => {
    e.preventDefault()
    const { typeId, modelId, serialNumber, manufactureId, typeName, manufactureName, modelName } = this.state
    const { addHardware } = this.props
    await addHardware(
      {
        typeId,
        manufactureId,
        modelId,
        serialNumber,
        isFaulty: false,
      },
      { typeName, manufactureName, modelName }
    )
    this.setState({
      serialNumber: "",
    })
  }

  render() {
    const { serialNumber, isModalOpen, getState, models, errors } = this.state
    const {
      error,
      types,
      manufactures,
      errorType,
      errorManufacture,
      errorModel,
      resetManufactureErrors,
      resetModelErrors,
      resetTypeErrors,
    } = this.props

    return (
      <>
        <div className="ms-panel-header">
          <h6>Add Hardware</h6>
        </div>
        <div className="ms-panel-body">
          <Form noValidate onSubmit={this.onSubmit}>
            <SelectField
              name="typeId"
              label="Type"
              onChange={this.onChange}
              isModalOpen={isModalOpen}
              hardwares={types}
              showModal={this.toggleModal}
              add={this.addNewType}
              error={error && error.data.typeId}
            />
            <SelectField
              name="manufactureId"
              label="Manufacture"
              onChange={this.onChange}
              isModalOpen={isModalOpen}
              hardwares={manufactures}
              showModal={this.toggleModal}
              add={this.addNewManufacture}
              error={error && error.data.manufactureId}
            />
            <SelectField
              name="modelId"
              label="Model"
              onChange={this.onChange}
              isModalOpen={isModalOpen}
              hardwares={models}
              showModal={this.toggleModal}
              add={this.addNewModel}
              error={error && error.data.modelId}
            />
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
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        {isModalOpen && (
          <ModalAdd
            title={isModalOpen}
            hideModal={this.toggleModal}
            addState={getState}
            isModalOpen={isModalOpen}
            onChange={this.onChange}
            manufactures={manufactures}
            error={errorType}
            resetError={resetTypeErrors}
          />
        )}
      </>
    )
  }
}

HardwareForm.propTypes = {
  typeId: PropTypes.number.isRequired,
  modelId: PropTypes.number.isRequired,
  manufactureId: PropTypes.number.isRequired,
  typeName: PropTypes.string.isRequired,
  manufactureName: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired,
  models: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  addType: PropTypes.func.isRequired,
  addModel: PropTypes.func.isRequired,
  addHardware: PropTypes.func.isRequired,
  addManufacture: PropTypes.func.isRequired,
  model: PropTypes.string.isRequired,
  manufacture: PropTypes.string.isRequired,
  error: PropTypes.string,
}
