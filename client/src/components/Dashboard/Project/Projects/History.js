import React from "react"
import { Table } from "react-bootstrap"
import moment from "moment"
import styles from "./Projects.module.css"
import PropTypes from "prop-types"

const History = ({ project }) => {
  return (
    <div className="ms-panel">
      <div className={`ms-panel-header ${styles.headermini}`}>
        <div className={`d-flex justify-content-between ${styles.header}`}>
          <h6>History</h6>
        </div>
      </div>
      <div className="ms-panel-body">
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Consultant</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {project.history
                .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                .map(({ createdAt, status, consultant: { firstName, lastName } }) => (
                  <tr>
                    <td>{moment(createdAt).format("LLLL")}</td>
                    <td>
                      {firstName} {lastName}
                    </td>
                    <td>{status.name}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

History.propTypes = {
  project: PropTypes.object.isRequired,
}

export default History
