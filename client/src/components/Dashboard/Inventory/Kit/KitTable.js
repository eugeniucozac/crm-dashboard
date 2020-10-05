import React, { Component } from "react"
import { Table, Button } from "react-bootstrap"
import { ModalDelete } from "@components/shared/ModalDelete"
import { Loading } from "@components/shared/Loading"
import Pagination from "@components/shared/Pagination"
import moment from "moment"
import PropTypes from "prop-types"

class KitTable extends Component {
  state = {
    currentPage: 1,
    currentDate: new Date(),
  }

  goNext = currentPage => {
    this.setState({ currentPage: currentPage + 1 })
  }

  goPrev = currentPage => {
    this.setState({ currentPage: currentPage - 1 })
  }

  render() {
    const { roleName, kits, loading, removeKit, isModalOpen, limit, toggleModal, editKit, addViewIssue } = this.props
    const { currentPage, currentDate } = this.state

    let alertName = ""
    let difference = ""

    if (loading) return <Loading />
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hardware</th>
              <th>Serial Number</th>
              <th>Calibration Number</th>
              <th>Current Cal Date</th>
              <th>Current Due Date</th>
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
            {kits.length
              ? kits
                  .slice(currentPage * limit - limit, currentPage * limit)
                  .map(
                    ({ id, name, isFaulty, hardwares, calibrationNumber, calibrationCurDate, calibrationDueDate }) => (
                      <tr key={id} className={`${isFaulty && "notavailable"}`}>
                        <td>{name}</td>
                        <td>
                          {hardwares.map(({ type, model }) => (
                            <p>
                              {type.name} {model.manufacture.name} {model.name}
                            </p>
                          ))}
                        </td>
                        <td>
                          {hardwares.map(({ serialNumber }) => (
                            <p> {serialNumber}</p>
                          ))}
                        </td>
                        <td>{calibrationNumber}</td>
                        <td>{calibrationCurDate.substr(0, 10)}</td>
                        <td>
                          {
                            ((difference = moment.duration(new Date(calibrationDueDate) - currentDate, "milliseconds")),
                            (alertName =
                              currentDate > new Date(calibrationDueDate)
                                ? "redAlert"
                                : difference.asDays() < 14 && difference.asDays() > 0
                                ? "yellowAlert"
                                : null),
                            (<a className={alertName}>{calibrationDueDate.substr(0, 10)}</a>))
                          }
                        </td>
                        <td>
                          <Button id={id} variant="primary" onClick={() => addViewIssue(id, name)}>
                            Add/View
                          </Button>
                        </td>
                        {(roleName === "admin" || roleName === "technical-manager") && (
                          <>
                            <td>
                              {
                                <Button id={id} variant="primary" onClick={() => editKit(id)}>
                                  Edit/Add Item
                                </Button>
                              }
                            </td>
                            <td>
                              <Button id={id} variant="primary" onClick={() => toggleModal(id)}>
                                Delete Item
                              </Button>
                              <ModalDelete
                                id={id}
                                hideModal={toggleModal}
                                isModalOpen={isModalOpen}
                                deleteState={() => removeKit(id)}
                              />
                            </td>
                          </>
                        )}
                      </tr>
                    )
                  )
              : null}
          </tbody>
        </Table>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          onPageChange={this.onPageChange}
          currentPage={currentPage}
          items={kits}
          limit={limit}
        />
      </>
    )
  }
}

KitTable.propTypes = {
  roleName: PropTypes.string.isRequired,
  kits: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  removeKit: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
  editKit: PropTypes.func.isRequired,
  addViewIssue: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  currentDate: PropTypes.instanceOf(Date),
}

export default KitTable
