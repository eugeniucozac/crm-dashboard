import React, { Component } from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import styles from "./Projects.module.css"
import PropTypes from "prop-types"

class Details extends Component {
  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  padId = number => Array(Math.max(5 - String(number).length + 1, 0)).join(0) + number

  render() {
    const {
      project: {
        id,
        description,
        addressBook: { addressName, companyName, users },
        site,
        consultants,
        consultant: { firstName, lastName },
        createdAt,
        history,
      },
    } = this.props

    return (
      <>
        <div className={`ms-panel-header ${styles.headermini}`}>
          <div className={`d-flex justify-content-between ${styles.header}`}>
            <h6>Project</h6>
            <h6>#{this.padId(id)}</h6>
          </div>
        </div>
        <div class="ms-panel-body">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div className={styles.invoiceaddress}>
                <h5>{companyName}</h5>
                <p>{addressName}</p>
              </div>
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="invoice-date">
                <li>Created Date: {moment(createdAt).format("LLLL")}</li>
                <li>
                  <h5 className={styles.byconsultant}>
                    {firstName} {lastName}
                  </h5>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.categoriesconsultants}>
            <h2>Consultants</h2>
            <ul>
              {consultants.map(({ firstName, lastName }) => (
                <li>
                  {firstName} {lastName}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.barier}>
            <h2>Site Address</h2>
            <p>{site.addressName}</p>
          </div>
          <div className={styles.barier}>
            <h2>Site Phone Number</h2>
            <p>{site.phoneNumber}</p>
          </div>
          <div className={styles.barier}>
            <h2>Users</h2>
            <div class="row">
              {users.map(({ firstName, lastName, role, email1, phoneNumber1 }) => (
                <div class="col-xl-4 col-md-6 col-sm-12">
                  <div className={`media ms-profile-experience ${styles.user}`}>
                    <div class="mr-2 align-self-center">
                      <img src="https://via.placeholder.com/270x270" class="ms-img-round ms-img-small" alt="people" />
                    </div>
                    <div class="media-body">
                      <h4>
                        {firstName} {lastName} - {role.name}
                      </h4>
                      <p>{email1}</p>
                      <p>{phoneNumber1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.barier}>
            <h2>Status</h2>
            <p>{history.length && history[0].status.name}</p>
          </div>
          <div className={styles.barier}>
            <h2>Description</h2>
            <p>{description}</p>
          </div>
          <div class="invoice-buttons text-right">
            <Link to={`/dashboard/project/${id}/create-quote`} className={`btn btn-primary mr-2 ${styles.btn}`}>
              Create a Quote
            </Link>
          </div>
        </div>
      </>
    )
  }
}

Details.propTypes = {
  loading: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    consultants: PropTypes.arrayOf(PropTypes.object),
    consultant: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
    createdAt: PropTypes.instanceOf(Date),
    history: PropTypes.arrayOf(PropTypes.object),
    addressBook: PropTypes.shape({
      addressName: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      users: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}

export default Details
