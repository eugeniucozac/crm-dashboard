import React from "react"
import { Button, Modal, ModalFooter, Form, ModalBody } from "react-bootstrap"
import { FaEnvelopeOpen, FaFilePdf } from "react-icons/fa"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"
import { TextareaField } from "@components/shared/Fields/TextareaField"

export const SendEmail = ({ toggleEmail, to, onSend, onChange, filename }) => {
  return (
    <Modal show={toggleEmail} onHide={() => toggleEmail(null)} size="lg" centered>
      <Form noValidate onSubmit={e => onSend(e, filename)}>
        <Modal.Header className="bg-primary" closeButton>
          <h5 className="modal-title has-icon text-white">
            <FaEnvelopeOpen />
            Compose Email:
          </h5>
        </Modal.Header>
        <ModalBody>
          <TextField name="to" label="To" value={to} type="email" onChange={onChange} />
          <TextField name="subject" label="Subject" placeholder="Subject" onChange={onChange} />
          <TextareaField name="text" label="Message" rows={6} onChange={onChange} />
          <span>
            <FaFilePdf /> {filename}.pdf
          </span>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => toggleEmail(null)}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" type="submit">
            Send Email
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

SendEmail.propTypes = {
  toggleEmail: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  onSend: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  filename: PropTypes.string.isRequired,
}
