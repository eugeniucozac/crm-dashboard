import React, { Component } from "react"
import { Row, Col, Table, Button } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { TypeForm } from "@components/Dashboard/Inventory/Type/TypeForm"
import { Dashboard } from "@components/Dashboard"
import { ModalDelete } from "@components/shared/ModalDelete"
import { Loading } from "@components/shared/Loading"
import { removeType, getTypes, addType, resetTypeErrors } from "@actions/inventory"
import { selectTypes, loadingTypes, typeErrors } from "@selectors/inventory"

class Type extends Component {
  state = {
    isModalOpen: null,
  }

  componentDidMount() {
    this.props.getTypes()
  }

  toggleModal = isModalOpen => {
    this.setState({ isModalOpen })
  }

  render() {
    const { loading, types, removeType, resetTypeErrors, error, addType } = this.props
    const { isModalOpen } = this.state

    if (loading) return <Loading />
    if (!types.length) return null
    return (
      <Dashboard>
        <div className="ms-panel">
          <div className="ms-panel-header">
            <h6>Types</h6>
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
                {types.map(({ id, name }) => (
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
                        isModalOpen={isModalOpen}
                        deleteState={() => removeType(id)}
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
                <h6>Add Type</h6>
              </div>
              <div className="ms-panel-body">
                <TypeForm resetTypeErrors={resetTypeErrors} addType={addType} error={error} />
              </div>
            </div>
          </Col>
        </Row>
      </Dashboard>
    )
  }
}

Type.propTypes = {
  isModalOpen: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  types: PropTypes.arrayOf(PropTypes.object),
  getTypes: PropTypes.func.isRequired,
  removeType: PropTypes.func.isRequired,
  addType: PropTypes.func.isRequired,
  error: PropTypes.object,
}

const mapStateToProps = state => ({
  types: selectTypes(state),
  loading: loadingTypes(state),
  error: typeErrors(state),
})

export default connect(mapStateToProps, { getTypes, removeType, addType, resetTypeErrors })(Type)
