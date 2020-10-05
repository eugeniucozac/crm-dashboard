import React, { Component } from "react"
import { connect } from "react-redux"
import { Table as BootstrapTable } from "react-bootstrap"
import { Link } from "react-router-dom"
import moment from "moment"
import { Loading } from "@components/shared/Loading"
import { getInvoices } from "@actions/invoice"
import { loadingInvoices, selectInvoicesSearch } from "@selectors/invoice"
import Pagination from "@components/shared/Pagination"
import PropTypes from "prop-types"

class Table extends Component {
  state = {
    currentPage: 1,
    limit: 15,
  }

  componentDidMount() {
    this.props.getInvoices()
  }

  goNext = currentPage => {
    this.setState({ currentPage: currentPage + 1 })
  }

  goPrev = currentPage => {
    this.setState({ currentPage: currentPage - 1 })
  }

  render() {
    const { invoices, loading } = this.props
    const { currentPage, limit } = this.state
    if (loading) return <Loading />
    return (
      <>
        <BootstrapTable striped bordered hover>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Job Name</th>
              <th>Invoice No</th>
              <th>Invoice Date</th>
              <th>Invoice Status</th>
              <th>Total netto/brutto</th>
              <th>Payment Date</th>
              <th>Payment Type</th>
            </tr>
          </thead>
          <tbody>
            {invoices.length
              ? invoices
                  .slice(currentPage * limit - limit, currentPage * limit)
                  .map(({ InvoiceID, InvoiceNumber, DateString, Status, Total, FullyPaidOnDate }) => {
                    return (
                      <tr key={InvoiceID}>
                        <td>
                          <Link to={`/dashboard/invoice/${InvoiceID}`}> {InvoiceID}</Link>
                        </td>
                        <td>Job Name</td>
                        <td>{InvoiceNumber}</td>
                        <td>{moment(DateString).format("DD-MM-YYYY")}</td>
                        <td>{Status}</td>
                        <td>{Total}</td>
                        <td>{moment(FullyPaidOnDate).format("DD-MM-YYYY")}</td>
                        <td>Payment Type</td>
                      </tr>
                    )
                  })
              : null}
          </tbody>
        </BootstrapTable>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          onPageChange={this.onPageChange}
          currentPage={currentPage}
          items={invoices}
          limit={limit}
        />
      </>
    )
  }
}

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  invoices: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state, ownProps) => ({
  invoices: selectInvoicesSearch(state, ownProps.query),
  loading: loadingInvoices(state),
})

export default connect(mapStateToProps, {
  getInvoices,
})(Table)
