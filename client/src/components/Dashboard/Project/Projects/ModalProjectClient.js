import React from "react"
import { Button, Modal, ModalFooter, ModalBody, FormLabel } from "react-bootstrap"
import { FaShareAlt } from "react-icons/fa"
import { TextField } from "@components/shared/Fields/TextField"
import AdressAutocomplete from "@shared/AdressAutocomplete/AdressAutocomplete"
import PropTypes from "prop-types"

const ModalProjectClient = ({ isModalOpen, hideModal, title, onChange, addState, errors }) => {
  return (
    <Modal show={isModalOpen} onHide={hideModal} centered>
      <Form noValidate onSubmit={addState}>
        <Modal.Header className="bg-primary" closeButton>
          <h5 className="modal-title has-icon text-white">
            <FaShareAlt />
            {title}
          </h5>
        </Modal.Header>
        <ModalBody>
          <TextField
            name="company"
            label="Company"
            placeholder="Company"
            onChange={onChange}
            error={errors && errors.name}
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            placeholder="Ex: ec@intel.com"
            onChange={onChange}
            error={errors && errors.name}
          />
          <TextField
            type="tel"
            name="phone"
            label="Phone"
            placeholder="Ex: 588549594504"
            onChange={onChange}
            error={errors && errors.name}
          />
          <div className="ms-form-group has-icon">
            <FormLabel>Address:</FormLabel>
            <AdressAutocomplete onChange={field} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" className="swal2-styled btn-light" onClick={hideModal}>
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

ModalProjectClient.propTypes = {
  hideModal: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addState: PropTypes.func.isRequired,
  error: PropTypes.object,
}

export default ModalProjectClient
