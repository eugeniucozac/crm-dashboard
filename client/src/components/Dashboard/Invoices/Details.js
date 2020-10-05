import React, { Component } from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import styles from "./Invoices.module.css"
import PropTypes from "prop-types"

class Details extends Component {
  render() {
    const {
      invoice: { Type, InvoiceNumber, Contact, DateString, DueDateString, Status, SubTotal, TotalTax, Total },
    } = this.props

    return (
      <>
        <div className={`ms-panel-header ${styles.headermini}`}>
          <div className={`d-flex justify-content-between ${styles.header}`}>
            <h6>Invoice</h6>
            <h6>#{InvoiceNumber}</h6>
          </div>
        </div>
        <div class="ms-panel-body">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div className={styles.invoiceaddress}>
                <h5>companyName</h5>
                <p>addressName</p>
              </div>
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="invoice-date">
                <li>Created Date: {moment(DateString).format("LLLL")}</li>
                <li>
                  <h5 className={styles.byconsultant}>Eugeniu Cozac</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.barier}>
            <h2>Site Address</h2>
            <p>site.addressName</p>
          </div>
          <div className={styles.barier}>
            <h2>Site Phone Number</h2>
            <p>site.phoneNumber</p>
          </div>
          <div className={styles.barier}>
            <h2>Status</h2>
            <p>Status</p>
          </div>
          <div className={styles.barier}>
            <h2>Description</h2>
            <p>description</p>
          </div>
          <div class="invoice-buttons text-right">
            <Link to={`/dashboard/project/${5}/create-quote`} className={`btn btn-primary mr-2 ${styles.btn}`}>
              Create a Quote
            </Link>
          </div>
        </div>
      </>
    )
  }
}

Details.propTypes = {}

export default Details
