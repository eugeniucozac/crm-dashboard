import React, { Component } from "react"
import moment from "moment"
import { FaReply } from "react-icons/fa"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import CreateMessage from "@components/Dashboard/Issues/CreateMessage"
import { RectLoading } from "@components/shared/RectLoading"
import { getIssueMessages, addIssueMessage } from "@actions/issue"
import { getConsultants } from "@actions/consultant"
import {
  selectConsultants,
  selectConsultantsManagers,
} from "@selectors/consultant"
import { selectAuthorizationId } from "@selectors/authorization"
import { loadingIssueMessages, issueMessagesErrors, selectIssueMessages } from "@selectors/issue"
import PropTypes from "prop-types"

class Messages extends Component {
  state = {
    createMessage: null,
    consultants: [],
  }

  componentDidMount() {
    this.props.getIssueMessages(this.props.issueId)
    this.props.getConsultants()
  }

  onChange = e => {
    const { name, value, selectedOptions } = e.target
    if (name == "consultants") {
      this.setState({ consultants: Array.from(selectedOptions, option => parseInt(option.value)) })
    } else {
      this.setState({ [name]: value })
    }
  }

  toggleMessage = createMessage => {
    this.setState({ createMessage })
  }

  addMessage = async e => {
    e.preventDefault()
    const { addIssueMessage, consultantId, issueId, consultantsManagers } = this.props
    const { title, message, consultants } = this.state

    try {
      await addIssueMessage(issueId, {
        fromConsultantId: consultantId,
        title,
        message,
        statusId: 1,
        consultants: [...new Set([...consultantsManagers, ...consultants])],
      })

      this.setState({
        createMessage: null,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { messages, issueId, consultants, loading, error } = this.props
    const { createMessage } = this.state

    if (loading) return <RectLoading />
    return (
      <>
        <div className="justify-content-end row">
          <ul className="ms-scrollable ps ps--active-y col-9">
            {messages.length
              ? messages.map(({ title, createdAt, message, fromConsultant: { firstName, lastName } }) => {
                  return (
                    <li className="media ms-email clearfix mb-1">
                      <div className="ms-email-img mr-3 ">
                        <div className="ms-img-round-small"></div>
                      </div>
                      <div className="media-body ms-email-details">
                        <h6 className="ms-email-subject">
                          {title} &nbsp; [&nbsp;
                          <strong>
                            {firstName} {lastName}
                          </strong>
                          &nbsp;]
                        </h6>
                        <span className="ms-email-time">{moment(createdAt).format("LLL")}</span>
                        <p className="ms-email-msg">{message}</p>
                      </div>
                    </li>
                  )
                })
              : null}
          </ul>
          <div className="col-12">
            <Button className="add-issue mt-2" onClick={() => this.toggleMessage(issueId)}>
              <FaReply />
            </Button>
            {createMessage && (
              <CreateMessage
                toggleMessage={this.toggleMessage}
                consultants={consultants}
                addMessage={this.addMessage}
                onChange={this.onChange}
                error={error}
              />
            )}
          </div>
        </div>
      </>
    )
  }
}

Messages.propTypes = {
  consultants: PropTypes.arrayOf(PropTypes.object),
  messages: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.object,
  createMessage: PropTypes.number.isRequired,
  consultantId: PropTypes.number.isRequired,
  issueId: PropTypes.number.isRequired,
  addIssueMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, props) => ({
  loading: loadingIssueMessages(state),
  error: issueMessagesErrors(state),
  messages: selectIssueMessages(state, props.issueId),
  consultants: selectConsultants(state),
  consultantsManagers: selectConsultantsManagers(state),
  consultantId: selectAuthorizationId(state),
})

export default connect(mapStateToProps, { getConsultants, getIssueMessages, addIssueMessage })(Messages)
