import React, { Component } from "react"
import { Button, FormGroup, FormControl, FormLabel, Modal, ModalFooter, Form, ModalBody } from "react-bootstrap"
import { connect } from "react-redux"
import { FaShareAlt } from "react-icons/fa"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"
import { TextareaField } from "@components/shared/Fields/TextareaField"
import { resetIssueErrors } from "@actions/issue"
import { issueErrors } from "@selectors/issue"

class CreateMessage extends Component {
  componentWillUnmount() {
    this.props.resetIssueErrors()
  }
  render() {
    const { toggleMessage, consultants, addMessage, onChange, error } = this.props
    return (
      <Modal show={toggleMessage} onHide={() => toggleMessage(null)} size="lg" centered>
        <Form noValidate onSubmit={addMessage}>
          <Modal.Header className="bg-primary" closeButton>
            <h5 className="modal-title has-icon text-white">
              <FaShareAlt />
              Reply Message:
            </h5>
          </Modal.Header>
          <ModalBody>
            <FormGroup>
              <FormLabel>Cc: (Optional)</FormLabel>
              <FormControl as="select" multiple name="consultants" onChange={onChange}>
                {consultants.map(({ id, lastName, firstName }) => (
                  <option key={id} value={id}>
                    {firstName} {lastName}
                  </option>
                ))}
              </FormControl>
            </FormGroup>
            <TextField
              name="title"
              label="Title"
              placeholder="Title of message"
              onChange={onChange}
              error={error && error.data.title}
            />
            <TextareaField name="message" label="Message" onChange={onChange} error={error && error.data.message} />
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => toggleMessage(null)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" type="submit">
              Send Message
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }
}

CreateMessage.propTypes = {
  toggleMessage: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  consultants: PropTypes.arrayOf(PropTypes.object),
  errors: PropTypes.object,
}

const mapStateToProps = state => ({
  errors: issueErrors(state),
})

export default connect(mapStateToProps, { resetIssueErrors })(CreateMessage)
