import React, { Component } from "react"
import { Button, Modal, ModalFooter, Form, ModalBody } from "react-bootstrap"
import { connect } from "react-redux"
import { FaShareAlt } from "react-icons/fa"
import { TextField } from "@components/shared/Fields/TextField"
import { TextareaField } from "@components/shared/Fields/TextareaField"
import { CheckboxField } from "@components/shared/Fields/CheckboxField"
import { resetIssueErrors } from "@actions/issue"
import { issueErrors } from "@selectors/issue"
import PropTypes from "prop-types"

class CreateIssue extends Component {
  componentWillUnmount() {
    this.props.resetIssueErrors()
  }
  render() {
    const { toggleIssue, consultants, addIssue, onChange, isFaulty, errors, categoryName } = this.props
    return (
      <Modal show={toggleIssue} onHide={() => toggleIssue(null)} size="lg" centered>
        <Form noValidate onSubmit={addIssue}>
          <Modal.Header className="bg-primary" closeButton>
            <h5 className="modal-title has-icon text-white">
              <FaShareAlt />
              Create issue
            </h5>
          </Modal.Header>
          <ModalBody>
            <TextField
              label="To:"
              placeholder={consultants
                .filter(consultant => {
                  return consultant.role.name === "Technical manager"
                })
                .map(({ firstName, lastName }) => `${firstName} ${lastName}`)}
              disabled
            />
            <TextField
              name="title"
              label="Title"
              placeholder="Title of issue"
              onChange={onChange}
              error={errors && errors.data.title}
            />
            <TextareaField
              name="message"
              label="Describe your issue"
              onChange={onChange}
              error={errors && errors.data.message}
            />
            {categoryName === "Kit" && (
              <CheckboxField name="isFaulty" value={isFaulty} label="Item is is faulty" onChange={onChange} />
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" className="swal2-styled btn-light" onClick={() => toggleIssue(null)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="swal2-confirm swal2-styled">
              Add
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    )
  }
}

CreateIssue.propTypes = {
  errors: PropTypes.object,
  isFaulty: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  addIssue: PropTypes.func.isRequired,
  toggleIssue: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
  consultants: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => ({
  errors: issueErrors(state),
})

export default connect(mapStateToProps, { resetIssueErrors })(CreateIssue)
