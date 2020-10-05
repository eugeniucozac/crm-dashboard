import React, { Component } from "react"
import { Row, Col, Table } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Consultant } from "@components/Dashboard/Consultants/Consultant"
import { Dashboard } from "@components/Dashboard"
import RegisterConsultant from "@components/Dashboard/Consultants/RegisterConsultant"
import { Loading } from "@components/shared/Loading"
import { getConsultants, removeConsultant, updateConsultant, addConsultant, resetErrors } from "@actions/consultant"
import { selectConsultants, loadingConsultants, consultantErrors } from "@selectors/consultant"
import { selectRoleAuthorization, selectAuthorizationId } from "@selectors/authorization"

class Consultants extends Component {
  componentDidMount() {
    this.props.getConsultants()
  }

  render() {
    const {
      roleName,
      loading,
      consultants,
      authorizedId,
      removeConsultant,
      updateConsultant,
      addConsultant,
      resetErrors,
      error,
    } = this.props
    if (loading) return <Loading />
    if (!consultants.length) return null

    return (
      <Dashboard>
        <div className="ms-panel">
          <div className="ms-panel-header">
            <h6>Consultants</h6>
          </div>
          <div className="ms-panel-body">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Mobile Number</th>
                  <th>Title</th>
                  <th>Role</th>
                  {roleName === "admin" && (
                    <>
                      <th>Change Password</th>
                      <th>Update</th>
                      <th>Delete?</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {consultants.map((consultant, index) => {
                  return (
                    <Consultant
                      key={index}
                      consultant={consultant}
                      authorizedId={authorizedId}
                      roleName={roleName}
                      removeConsultant={removeConsultant}
                      updateConsultant={updateConsultant}
                    />
                  )
                })}
              </tbody>
            </Table>
          </div>
        </div>
        {roleName === "admin" && (
          <Row>
            <Col lg="6">
              <div className="ms-panel">
                <div className="ms-panel-header">
                  <h6>Add a consultant</h6>
                </div>
                <div className="ms-panel-body">
                  <RegisterConsultant addConsultant={addConsultant} error={error} resetErrors={resetErrors} />
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Dashboard>
    )
  }
}

Consultants.propTypes = {
  loading: PropTypes.bool.isRequired,
  roleName: PropTypes.string.isRequired,
  authorizedId: PropTypes.number.isRequired,
  consultants: PropTypes.array.isRequired,
  getConsultants: PropTypes.func.isRequired,
  addConsultant: PropTypes.func.isRequired,
  resetErrors: PropTypes.func.isRequired,
  removeConsultant: PropTypes.func.isRequired,
  updateConsultant: PropTypes.func.isRequired,
  consultants: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => ({
  consultants: selectConsultants(state),
  loading: loadingConsultants(state),
  error: consultantErrors(state),
  roleName: selectRoleAuthorization(state),
  authorizedId: selectAuthorizationId(state),
})

export default connect(mapStateToProps, {
  getConsultants,
  removeConsultant,
  updateConsultant,
  addConsultant,
  resetErrors,
})(Consultants)
