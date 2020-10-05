import React, { Component } from "react"
import { Table, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import moment from "moment"
import { SendEmail } from "@components/shared/SendEmail"
import { getQuotes, removeQuote } from "@actions/quote"
import { selectQuotes, quotesErrors } from "@selectors/quote"
import { selectEmailAuthorization } from "@selectors/authorization"
import { sendQuote } from "@services/mailer"
import styles from "./Quotes.module.css"

class ProjectQuotes extends Component {
  state = {
    isModalOpen: null,
    fileName: "",
  }

  componentDidMount() {
    this.props.getQuotes(this.props.projectId)
  }

  toggleEmail = isModalOpen => {
    this.setState({ isModalOpen })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSend = (e, filename) => {
    e.preventDefault()
    const { subject, text } = this.state
    const { from, users } = this.props
    const to = users.map(user => user.email1).join(", ")

    sendQuote({
      to,
      from,
      subject,
      text,
      filename,
    })
  }

  render() {
    const { quotes, removeQuote, projectId, users } = this.props
    const { isModalOpen } = this.state
    const to = users.map(user => user.email1).join(", ")

    return (
      <div className="ms-panel">
        <div className={`ms-panel-header ${styles.headermini}`}>
          <div className={`d-flex justify-content-between ${styles.header}`}>
            <h6>Quote</h6>
          </div>
        </div>
        <div className="ms-panel-body">
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Date</th>
                  <th scope="col">Edit</th>
                  <th scope="col">File</th>
                  <th scope="col">Send Email</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map(({ id, createdAt, name, converted }, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{moment(createdAt).format("LLLL")}</td>
                    <td>
                      <Link to={`/dashboard/project/${projectId}/quote/${name}`} className="btn-primary btn mt-0">
                        Edit Quote
                      </Link>
                    </td>
                    <td>
                      {converted ? (
                        <a rel="noreferrer" href={`http://localhost:3001/api/quote/files/${name}`} target="_blank">
                          {name}.pdf
                        </a>
                      ) : (
                        <p>You need to convert to PDF</p>
                      )}
                    </td>

                    <td>
                      <Button
                        id={id}
                        variant="primary"
                        onClick={() => {
                          this.toggleEmail(id)
                        }}
                      >
                        Open Email
                      </Button>
                      {isModalOpen && (
                        <SendEmail
                          toggleEmail={this.toggleEmail}
                          to={to}
                          filename={name}
                          onChange={this.onChange}
                          onSend={this.onSend}
                          error
                        />
                      )}
                    </td>
                    <td>
                      <Button variant="primary" onClick={() => removeQuote(id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

ProjectQuotes.propTypes = {
  isModalOpen: PropTypes.number.isRequired,
  quotes: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object),
  fileName: PropTypes.string.isRequired,
  removeQuote: PropTypes.func.isRequired,
  projectId: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  from: selectEmailAuthorization(state),
  quotes: selectQuotes(state),
  error: quotesErrors(state),
})

export default connect(mapStateToProps, { getQuotes, removeQuote })(ProjectQuotes)
