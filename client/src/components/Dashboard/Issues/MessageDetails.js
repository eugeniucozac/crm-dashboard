import React, { Component } from "react"
import { Button, Col } from "react-bootstrap"
import { FaReply } from "react-icons/fa"
import ReplyMessage from "@components/Dashboard/Issues/ReplyMessage"

class MessageDetails extends Component {
  state = {
    selectConsultants: [],
    reply: null,
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

  replyTo = reply => {
    this.setState({ reply })
  }

  addMessage = async e => {
    e.preventDefault()
    const {
      addIssueMessage,
      consultantId,
      messages: { issueId },
      openMessage,
    } = this.props
    const { selectConsultants, title, message } = this.state

    await addIssueMessage(issueId, {
      fromConsultantId: consultantId,
      title,
      message,
      statusId: 1,
      consultants: selectConsultants,
    })
    this.setState({ reply: null })
    openMessage(null)
  }

  render() {
    const {
      messages: {
        fromConsultant: { firstName, lastName },
        toConsultants,
        title,
        message,
        issueId,
        id,
      },
      messages,
      consultants,
      error,
    } = this.props

    const { reply } = this.state
    return (
      <div className="ms-scrollable ps ps--active-y">
        <div className="media ms-email clearfix">
          <div className="ms-email-img mr-3 ">
            <div className="ms-img-round">
              {firstName.charAt(0)} {lastName.charAt(0)}
            </div>
          </div>
          <div className="media-body ms-email-details issue-details">
            <span className="ms-email-sender">
              From:
              <strong>
                {firstName} {lastName}
              </strong>
              <br />
              To:
              <strong>{toConsultants.map(({ firstName, lastName }) => `${firstName} ${lastName}`).join(", ")}</strong>
              <br />
              Title: <i>{messages && title}</i>
            </span>
            <p>{message}</p>
            {reply ? (
              <Col>
                <ReplyMessage
                  replyTo={this.replyTo}
                  consultants={consultants}
                  addMessage={this.addMessage}
                  onChange={this.onChange}
                  issueId={issueId}
                  error={error}
                  messageId={id}
                />
              </Col>
            ) : (
              <Button className="btn ms-btn-icon bg-primary add-issue mt-2" onClick={this.replyTo} name="button">
                <FaReply />
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default MessageDetails
