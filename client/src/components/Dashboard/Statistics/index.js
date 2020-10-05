import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import Sidebar from "../Sidebar"
import BarChart from "./BarChart"
import BubblemapOne from "./BubblemapOne"
import ConnectedScatter from "./ConnectedScatter"
import Densityplot from "./Densityplot"
import Histogram from "./Histogram"
import HorizontalBarchart from "./HorizontalBarchart"
import LinePlot from "./LinePlot"
import Piechart from "./Piechart"

class Statistics extends Component {
  render() {
    return (
      <section className="main">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg="11" className="container-left">
            <Row>
              <Col md="6">
                <BarChart />
              </Col>
              <Col md="6">
                <ConnectedScatter />
              </Col>
              <Col md="6">
                <Piechart />
              </Col>
              <Col md="6">
                <BubblemapOne />
              </Col>
              <Col md="6">
                <Densityplot />
              </Col>
              <Col md="6">
                <Histogram />
              </Col>
              <Col md="6">
                <HorizontalBarchart />
              </Col>
              <Col md="6">
                <LinePlot />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )
  }
}

export default Statistics
