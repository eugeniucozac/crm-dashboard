import React, { Component } from "react"
import { FormGroup, FormControl, FormLabel, Col, Form, Row } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"
import { TextareaField } from "@components/shared/Fields/TextareaField"
import { resetIssueErrors } from "@actions/issue"
import { issueErrors } from "@selectors/issue"

class ReplyMessage extends Component {
  state = {
    messageId: this.props.messageId,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    prevState.messageId !== nextProps.messageId && nextProps.resetIssueErrors()
  }

  componentWillUnmount() {
    this.props.resetIssueErrors()
  }

  render() {
    const { consultants, replyTo, addMessage, onChange, issue, error } = this.props
    return (
      <Form noValidate onSubmit={e => addMessage(e, issue)}>
        <Row>
          <FormGroup as={Col}>
            <FormLabel>Cc: (Optional)</FormLabel>
            <FormControl as="select" multiple name="consultants" onChange={onChange}>
              {consultants.map(({ id, firstName, lastName }) => (
                <option key={id} value={id}>
                  {firstName} {lastName}
                </option>
              ))}
            </FormControl>
          </FormGroup>
        </Row>
        <TextField
          name="title"
          label="Title"
          placeholder="Title"
          onChange={onChange}
          error={error && error.data.title}
        />
        <TextareaField
          name="message"
          label="Describe your issue:"
          onChange={onChange}
          error={error && error.data.message}
        />
        <FormGroup as={Col} className="text-right">
          <a className="btn btn-primary w-25 mr-1" onClick={() => replyTo(null)}>
            Cancel
          </a>
          <input type="submit" className="btn btn-primary w-25" name="btn25" value="Send Message"></input>
        </FormGroup>
      </Form>
    )
  }
}

ReplyMessage.propTypes = {
  consultants: PropTypes.arrayOf(PropTypes.object),
  addMessage: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object,
  replyTo: PropTypes.func.isRequired,
  issue: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  errors: issueErrors(state),
})

export default connect(mapStateToProps, { resetIssueErrors })(ReplyMessage)
