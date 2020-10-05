import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import Sidebar from "@components/Dashboard/Sidebar"
import Filter from "@components/shared/Filter"
import Table from "./Table"
import PropTypes from "prop-types"

class Invoices extends Component {
  state = {
    query: "",
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { query } = this.state
    return (
      <section className="main">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg="11" className="container-left">
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6>Invoices</h6>
              </div>
              <div className="ms-panel-body">
                <>
                  <Filter onChange={this.onChange} />
                  <Table query={query} />
                </>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    )
  }
}

Invoices.propTypes = {
  query: PropTypes.arrayOf(PropTypes.object),
}

export default Invoices
