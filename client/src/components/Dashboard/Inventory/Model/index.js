import React, { Component } from "react"
import { Row, Col, Table, Button } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { ModelForm } from "@components/Dashboard/Inventory/Model/ModelForm"
import { Dashboard } from "@components/Dashboard"
import { ModalDelete } from "@components/shared/ModalDelete"
import { Loading } from "@components/shared/Loading"
import { getManufactures, getModels, removeModel, addModel, resetModelErrors } from "@actions/inventory"
import { selectModels, modelErrors, loadingModels, selectManufactures } from "@selectors/inventory"

class Model extends Component {
  state = {
    isModalOpen: null,
  }

  componentDidMount() {
    this.props.getModels()
    this.props.getManufactures()
  }

  toggleModal = isModalOpen => {
    this.setState({ isModalOpen })
  }

  render() {
    const { loading, models, removeModel, manufactures, error, addModel, resetModelErrors } = this.props
    const { isModalOpen } = this.state
    if (loading) return <Loading />
    if (!models.length) return null
    return (
      <Dashboard>
        <div className="ms-panel">
          <div className="ms-panel-header">
            <h6>Model</h6>
          </div>
          <div className="ms-panel-body">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Manufacure Name</th>
                  <th>Delete?</th>
                </tr>
              </thead>
              <tbody>
                {models.map(({ id, name, manufacture }) => (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{manufacture.name}</td>
                    <td>
                      <Button
                        id={id}
                        variant="primary"
                        onClick={() => {
                          this.toggleModal(id)
                        }}
                      >
                        Delete Item
                      </Button>
                      <ModalDelete
                        id={id}
                        hideModal={this.toggleModal}
                        deleteState={() => removeModel(id)}
                        isModalOpen={isModalOpen}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <Row>
          <Col lg="5">
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6>Add Model</h6>
              </div>
              <div className="ms-panel-body">
                <ModelForm
                  error={error}
                  resetModelErrors={resetModelErrors}
                  manufactures={manufactures}
                  addModel={addModel}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Dashboard>
    )
  }
}

Model.propTypes = {
  isModalOpen: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  models: PropTypes.arrayOf(PropTypes.object),
  manufactures: PropTypes.arrayOf(PropTypes.object),
  getModels: PropTypes.func.isRequired,
  removeModel: PropTypes.func.isRequired,
  addModel: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  models: selectModels(state),
  manufactures: selectManufactures(state),
  error: modelErrors(state),
  loading: loadingModels(state),
})

export default connect(mapStateToProps, { getManufactures, getModels, removeModel, addModel, resetModelErrors })(Model)
