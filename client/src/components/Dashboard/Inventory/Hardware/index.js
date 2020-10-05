import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { issueCategory } from "@data"
import { Dashboard } from "@components/Dashboard"
import { HardwareForm } from "@components/Dashboard/Inventory/Hardware/HardwareForm"
import { EditHardwareForm } from "@components/Dashboard/Inventory/Hardware/EditHardwareForm"
import InventoryIssues from "@components/Dashboard/Inventory/Issues"
import { Loading } from "@components/shared/Loading"

import {
  getHardwares,
  getManufactures,
  removeHardware,
  addHardware,
  updateHardware,
  getTypes,
  getModels,
  addType,
  addManufacture,
  addModel,
} from "@actions/inventory"
import {
  selectHardwares,
  loadingHardwares,
  hardwareErrors,
  selectTypes,
  selectManufactures,
  typeErrors,
  manufactureErrors,
  selectModels,
} from "@selectors/inventory"
import { selectRoleAuthorization } from "@selectors/authorization"
import { resetManufactureErrors, resetModelErrors, resetTypeErrors } from "@actions/inventory"
import HardwareTable from "./HardwareTable"

class Hardware extends Component {
  state = {
    isModalOpen: null,
    currentDate: new Date(),
    inventoryData: null,
    hardwareId: null,
    limit: 10,
  }

  componentDidMount() {
    this.props.getManufactures()
    this.props.getModels()
    this.props.getTypes()
    this.props.getHardwares()
  }

  toggleIssues = inventoryData => {
    this.setState({ inventoryData })
  }

  toggleModal = isModalOpen => {
    this.setState({ isModalOpen })
  }

  addViewIssue = (id, name) => {
    this.setState({
      inventoryData: {
        id,
        name,
      },
    })
  }

  editHardware = hardwareId => {
    this.setState({
      hardwareId: this.props.hardwares.find(hardware => hardware.id === hardwareId),
    })
  }

  render() {
    const {
      error,
      errorType,
      errorManufacture,
      roleName,
      hardwares,
      addHardware,
      types,
      manufactures,
      models,
      addType,
      addManufacture,
      addModel,
      updateHardware,
      loading,
      removeHardware,
    } = this.props
    const { isModalOpen, inventoryData, hardwareId, limit } = this.state

    if (loading) return <Loading />
    return (
      <Dashboard>
        <div className="ms-panel">
          <div className="ms-panel-header">
            <h6>Hardwares</h6>
          </div>
          <div className="ms-panel-body">
            <HardwareTable
              limit={limit}
              isModalOpen={isModalOpen}
              removeHardware={removeHardware}
              hardwares={hardwares}
              editHardware={this.editHardware}
              toggleModal={this.toggleModal}
              roleName={roleName}
              addViewIssue={this.addViewIssue}
            />
          </div>
        </div>
        <Row>
          {(roleName === "admin" || roleName === "technical-manager") && (
            <Col lg="5">
              <div className="ms-panel">
                {hardwareId ? (
                  <EditHardwareForm
                    hardwareToEdit={hardwareId}
                    hideHardware={this.editHardware}
                    updateHardware={updateHardware}
                    error={error}
                  />
                ) : (
                  <HardwareForm
                    addHardware={addHardware}
                    addType={addType}
                    addManufacture={addManufacture}
                    addModel={addModel}
                    types={types}
                    manufactures={manufactures}
                    models={models}
                    error={error}
                    errorType={errorType}
                    errorManufacture={errorManufacture}
                    resetManufactureErrors={resetManufactureErrors}
                    resetModelErrors={resetModelErrors}
                    resetTypeErrors={resetTypeErrors}
                  />
                )}
              </div>
            </Col>
          )}
          <Col lg="7">
            {inventoryData && (
              <InventoryIssues
                inventory={inventoryData}
                toggleIssues={this.toggleIssues}
                addViewIssue={this.addViewIssue}
                category={issueCategory.find(item => item.name === "Hardware")}
              />
            )}
          </Col>
        </Row>
      </Dashboard>
    )
  }
}

Hardware.propTypes = {
  isModalOpen: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  types: PropTypes.arrayOf(PropTypes.object),
  hardwares: PropTypes.arrayOf(PropTypes.object),
  manufactures: PropTypes.arrayOf(PropTypes.object),
  models: PropTypes.arrayOf(PropTypes.object),
  roleName: PropTypes.string.isRequired,
  addType: PropTypes.func.isRequired,
  addManufacture: PropTypes.func.isRequired,
  addModel: PropTypes.func.isRequired,
  addHardware: PropTypes.func.isRequired,
  updateHardware: PropTypes.func.isRequired,
  removeHardware: PropTypes.func.isRequired,
  error: PropTypes.string,
  currentDate: PropTypes.instanceOf(Date),
  inventoryData: PropTypes.number.isRequired,
  hardwareId: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  hardwares: selectHardwares(state),
  loading: loadingHardwares(state),
  error: hardwareErrors(state),
  errorType: typeErrors(state),
  errorManufacture: manufactureErrors(state),
  roleName: selectRoleAuthorization(state),
  types: selectTypes(state),
  manufactures: selectManufactures(state),
  models: selectModels(state),
})

export default connect(mapStateToProps, {
  getHardwares,
  removeHardware,
  getManufactures,
  addHardware,
  getTypes,
  getModels,
  updateHardware,
  addType,
  addManufacture,
  addModel,
})(Hardware)
