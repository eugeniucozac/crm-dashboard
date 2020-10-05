import React, { Component } from "react"
import { Table, Button } from "react-bootstrap"
import { ModalDelete } from "@components/shared/ModalDelete"
import { Loading } from "@components/shared/Loading"
import Pagination from "@components/shared/Pagination"
import PropTypes from "prop-types"

class HardwareTable extends Component {
  state = {
    currentPage: 1,
  }

  goNext = currentPage => {
    this.setState({ currentPage: currentPage + 1 })
  }

  goPrev = currentPage => {
    this.setState({ currentPage: currentPage - 1 })
  }

  render() {
    const {
      roleName,
      hardwares,
      loading,
      removeHardware,
      isModalOpen,
      limit,
      toggleModal,
      editHardware,
      addViewIssue,
    } = this.props
    const { currentPage } = this.state

    if (loading) return <Loading />
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Type</th>
              <th>Manufacture</th>
              <th>Model</th>
              <th>Serial Number</th>
              <th>Issues</th>
              {(roleName === "admin" || roleName === "technical-manager") && (
                <>
                  <th>Edit</th>
                  <th>Delete?</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {hardwares.length
              ? hardwares
                  .slice(currentPage * limit - limit, currentPage * limit)
                  .map(({ id, serialNumber, type, model }) => (
                    <tr key={id}>
                      <td>{type.name}</td>
                      <td>{model.manufacture.name} </td>
                      <td>{model.name}</td>
                      <td>{serialNumber}</td>
                      <td>
                        <Button
                          id={id}
                          variant="primary"
                          onClick={() => addViewIssue(id, `${model.manufacture.name} ${model.name}`)}
                        >
                          Add/View
                        </Button>
                      </td>
                      {(roleName === "admin" || roleName === "technical-manager") && (
                        <>
                          <td>
                            <Button id={id} variant="primary" onClick={() => editHardware(id)}>
                              Edit/Add Item
                            </Button>
                          </td>
                          <td>
                            <Button id={id} variant="primary" onClick={() => toggleModal(id)}>
                              Delete Item
                            </Button>
                            <ModalDelete
                              id={id}
                              hideModal={toggleModal}
                              deleteState={() => removeHardware(id)}
                              isModalOpen={isModalOpen}
                            />
                          </td>
                        </>
                      )}
                    </tr>
                  ))
              : null}
          </tbody>
        </Table>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          onPageChange={this.onPageChange}
          currentPage={currentPage}
          items={hardwares}
          limit={limit}
        />
      </>
    )
  }
}

HardwareTable.propTypes = {
  currentPage: PropTypes.number.isRequired,
  roleName: PropTypes.string.isRequired,
  hardwares: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  removeHardware: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
  editHardware: PropTypes.func.isRequired,
  addViewIssue: PropTypes.func.isRequired,
}

export default HardwareTable
