import React from "react"
import { Row, Col } from "react-bootstrap"
import Sidebar from "@components/Dashboard/Sidebar"
import KitAlert from "@components/Dashboard/Inventory/KitAlert"

export const Dashboard = ({ children }) => {
  return (
    <section className="main">
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col lg="11" className="container-left">
          <KitAlert />
          {children}
        </Col>
      </Row>
    </section>
  )
}
