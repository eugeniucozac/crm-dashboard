import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { issueCategory } from "@data"
import { KitForm } from "@components/Dashboard/Inventory/Kit/KitForm"
import { EditKitForm } from "@components/Dashboard/Inventory/Kit/EditKitForm"
import InventoryIssues from "@components/Dashboard/Inventory/Issues"
import { Dashboard } from "@components/Dashboard"
import { getKits, removeKit, addKit, getHardwares, sendCalibrationNotification, updateKit } from "@actions/inventory"
import { selectRoleAuthorization } from "@selectors/authorization"
import { Loading } from "@components/shared/Loading"
import { selectKits, kitErrors, selectHardwares, loadingHardwares } from "@selectors/inventory"
import KitTable from "./KitTable"

class Kit extends Component {
  state = {
    isModalOpen: null,
    inventoryData: null,
    kitId: null,
    limit: 10,
  }

  componentDidMount() {
    this.props.getKits()
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

  editKit = id => {
    const { kits } = this.props
    this.setState({ kitId: kits.find(kit => kit.id === id) })
  }

  render() {
    const { roleName, error, kits, hardwares, updateKit, loading, removeKit, addKit } = this.props
    const { isModalOpen, kitId, inventoryData, limit } = this.state

    if (loading) return <Loading />
    return (
      <Dashboard>
        <div className="ms-panel">
          <div className="ms-panel-header">
            <h6>Hardware Kits</h6>
          </div>
          <div className="ms-panel-body">
            <KitTable
              limit={limit}
              isModalOpen={isModalOpen}
              removeKit={removeKit}
              kits={kits}
              editKit={this.editKit}
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
                {kitId ? (
                  <EditKitForm
                    kitToEdit={kitId}
                    hideKit={this.editKit}
                    updateKit={updateKit}
                    sendCalibrationNotification={sendCalibrationNotification}
                    kits={kits}
                    error={error}
                  />
                ) : (
                  <KitForm error={error} addKit={addKit} hardwaresItems={hardwares} />
                )}
              </div>
            </Col>
          )}
          <Col lg="7">
            {inventoryData && (
              <InventoryIssues
                inventory={inventoryData}
                kits={kits}
                toggleIssues={this.toggleIssues}
                addViewIssue={this.addViewIssue}
                category={issueCategory.find(item => item.name === "Kit")}
              />
            )}
          </Col>
        </Row>
      </Dashboard>
    )
  }
}

Kit.propTypes = {
  isModalOpen: PropTypes.number.isRequired,
  inventoryData: PropTypes.number.isRequired,
  kitId: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  kits: PropTypes.arrayOf(PropTypes.object),
  roleName: PropTypes.string.isRequired,
  hardwares: PropTypes.array.isRequired,
  getKits: PropTypes.func.isRequired,
  removeKit: PropTypes.func.isRequired,
  addKit: PropTypes.func.isRequired,
  getHardwares: PropTypes.func.isRequired,
  updateKit: PropTypes.func.isRequired,
  sendCalibrationNotification: PropTypes.func.isRequired,
  error: PropTypes.object,
}

const mapStateToProps = state => ({
  kits: selectKits(state),
  hardwares: selectHardwares(state),
  loading: loadingHardwares(state),
  error: kitErrors(state),
  roleName: selectRoleAuthorization(state),
})

export default connect(mapStateToProps, {
  getKits,
  removeKit,
  addKit,
  getHardwares,
  updateKit,
  sendCalibrationNotification,
})(Kit)
