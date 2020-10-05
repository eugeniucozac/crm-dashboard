import React, { Component } from "react"
import { FaArrowLeft, FaPlus } from "react-icons/fa"
import moment from "moment"
import ReplyMessage from "@components/Dashboard/Issues/ReplyMessage"
import { Button, Col } from "react-bootstrap"
import MessageDetails from "@components/Dashboard/Issues/MessageDetails"
import { getIssueMessages, addIssueMessage } from "@actions/issue"
import { selectIssueMessages, loadingIssueMessages, issueMessagesErrors } from "selectors/issue"
import { selectAuthorizationId } from "@selectors/authorization"
import { connect } from "react-redux"
import { RectLoading } from "@components/shared/RectLoading"
import PropTypes from "prop-types"

class IssueMessages extends Component {
  state = {
    messageBlock: null,
    reply: null,
  }

  componentDidMount() {
    this.props.getIssueMessages(this.props.issueNumber)
  }

  openMessage = messageBlock => {
    this.setState({ messageBlock })
  }

  replyTo = reply => {
    this.setState({ reply })
  }

  toggleMessage = createMessage => {
    this.setState({ createMessage })
  }

  onChange = e => {
    const { name, value, selectedOptions } = e.target
    if (name === "consultants") {
      this.setState({
        selectConsultants: Array.from(selectedOptions, option => option.value),
      })
    } else {
      this.setState({ [name]: value })
    }
  }

  addMessage = async e => {
    e.preventDefault()

    const { addIssueMessage, consultantId, issueNumber } = this.props
    const { selectConsultants, title, message } = this.state

    await addIssueMessage(issueNumber, {
      fromConsultantId: consultantId,
      title,
      message,
      statusId: 1,
      consultants: selectConsultants,
    })
    this.setState({ reply: null })
    this.openMessage(null)
  }

  render() {
    const { messages, openIssue, loading, error, issueNumber, consultants, addIssueMessage, consultantId } = this.props
    const { messageBlock, reply } = this.state

    if (loading) return <RectLoading />
    return (
      <ul className="ms-scrollable ps ps--active-y mb-0">
        <div className="media ms-email clearfix">
          <a onClick={() => openIssue(null)}>
            <FaArrowLeft />
          </a>
        </div>
        {messages.length ? (
          messages.map((message, index) => {
            const { title, createdAt } = message
            return (
              <li className="media ms-email clearfix messages" key={index} onClick={() => this.openMessage(message)}>
                <div className="ms-email-img mr-3 ">
                  <div className="ms-img-round"></div>
                </div>
                <div className="media-body ms-email-details">
                  <>
                    <h6 className="ms-email-subject">{title} &nbsp;</h6>
                    <span className="ms-email-time">{moment(createdAt).format("LLL")}</span>
                  </>
                </div>
              </li>
            )
          })
        ) : (
          <>
            <div className="media ms-email no-messages">
              <p>There are no messages, but you can add one</p>
            </div>
            {reply ? (
              <Col className="replyMessage">
                <ReplyMessage
                  replyTo={this.replyTo}
                  consultants={consultants}
                  addMessage={this.addMessage}
                  onChange={this.onChange}
                  issueId={issueNumber}
                  error={error}
                />
              </Col>
            ) : (
              <Col>
                <Button className="add-issue mt-2" onClick={() => this.replyTo(issueNumber)} name="button">
                  <FaPlus />
                </Button>
              </Col>
            )}
          </>
        )}
        {messageBlock && (
          <MessageDetails
            messages={messageBlock}
            consultants={consultants}
            consultantId={consultantId}
            openMessage={this.openMessage}
            addIssueMessage={addIssueMessage}
            error={error}
          />
        )}
      </ul>
    )
  }
}

IssueMessages.propTypes = {
  messageBlock: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  addIssueMessage: PropTypes.func.isRequired,
  consultants: PropTypes.arrayOf(PropTypes.object),
  consultantId: PropTypes.bool.isRequired,
  issueNumber: PropTypes.number.isRequired,
  openIssue: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  loading: loadingIssueMessages(state),
  messages: selectIssueMessages(state),
  error: issueMessagesErrors(state),
  consultantId: selectAuthorizationId(state),
})

export default connect(mapStateToProps, { getIssueMessages, addIssueMessage })(IssueMessages)
