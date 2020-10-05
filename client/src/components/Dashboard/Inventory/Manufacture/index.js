import React, { Component } from "react"
import { Row, Col, Table, Button } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { ManufactureForm } from "@components/Dashboard/Inventory/Manufacture/ManufactureForm"
import { Dashboard } from "@components/Dashboard"
import { ModalDelete } from "@components/shared/ModalDelete"
import { Loading } from "@components/shared/Loading"
import { getManufactures, removeManufacture, addManufacture, resetManufactureErrors } from "@actions/inventory"
import { selectManufactures, loadingManufactures, manufactureErrors } from "@selectors/inventory"

class Manufacture extends Component {
  state = {
    isModalOpen: null,
  }

  componentDidMount() {
    this.props.getManufactures()
  }

  toggleModal = index => {
    this.setState({ isModalOpen: index })
  }

  render() {
    const { loading, manufactures, removeManufacture, error, addManufacture, resetManufactureErrors } = this.props
    const { isModalOpen } = this.state

    if (loading) return <Loading />
    if (!manufactures.length) return null
    return (
      <Dashboard>
        <div className="ms-panel">
          <div className="ms-panel-header">
            <h6>Manufacture</h6>
          </div>
          <div className="ms-panel-body">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Delete?</th>
                </tr>
              </thead>
              <tbody>
                {manufactures.map(({ id, name }) => (
                  <tr key={id}>
                    <td>{name}</td>
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
                        deleteState={() => removeManufacture(id)}
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
                <h6>Add Manufacture</h6>
              </div>
              <div className="ms-panel-body">
                <ManufactureForm
                  error={error}
                  addManufacture={addManufacture}
                  resetManufactureErrors={resetManufactureErrors}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Dashboard>
    )
  }
}

Manufacture.propTypes = {
  isModalOpen: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  manufactures: PropTypes.arrayOf(PropTypes.object),
  getModels: PropTypes.func.isRequired,
  removeManufacture: PropTypes.func.isRequired,
  addManufacture: PropTypes.func.isRequired,
  error: PropTypes.string,
}

const mapStateToProps = state => ({
  manufactures: selectManufactures(state),
  loading: loadingManufactures(state),
  error: manufactureErrors(state),
})

export default connect(mapStateToProps, { getManufactures, removeManufacture, addManufacture, resetManufactureErrors })(
  Manufacture
)
