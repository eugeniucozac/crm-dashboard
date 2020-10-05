import React from "react"
import { Row, Col } from "react-bootstrap"
import Sidebar from "@components/Dashboard/Sidebar"
import ChangePasswordForm from "@components/Dashboard/ChangePassword/ChangePasswordForm"

const ChangePassword = () => {
  return (
    <section className="main">
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col lg="11" className="container-left">
          <Row>
            <Col lg="6">
              <div className="ms-panel">
                <div className="ms-panel-header">
                  <h6>Change Password</h6>
                </div>
                <div className="ms-panel-body">
                  <ChangePasswordForm />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  )
}

export default ChangePassword
