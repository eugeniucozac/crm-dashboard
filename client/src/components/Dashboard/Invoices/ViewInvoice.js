import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { connect } from "react-redux"
import Sidebar from "@components/Dashboard/Sidebar"
import { Breadcrumb } from "@components/shared/Breadcrumb"
import { Loading } from "@components/shared/Loading"
import { getInvoices } from "@actions/invoice"
import { selectInvoice, loadingInvoice } from "@selectors/invoice"
import Details from "./Details"

class ViewInvoice extends Component {
  componentDidMount() {
    this.props.getInvoices()
  }

  render() {
    const { loading, invoice } = this.props

    if (loading) return <Loading />
    if (!invoice) return null
    return (
      <section className="main">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg="11" className="container-left">
            <Breadcrumb />
            <div className="ms-panel">
              <Details invoice={invoice} />
            </div>
          </Col>
        </Row>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  invoice: selectInvoice(state, props.computedMatch.params.id),
  loading: loadingInvoice(state),
})

export default connect(mapStateToProps, {
  getInvoices,
})(ViewInvoice)
