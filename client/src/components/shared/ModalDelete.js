import React from "react"
import PropTypes from "prop-types"
import { Button, Modal, ModalBody } from "react-bootstrap"

export const ModalDelete = ({ id, hideModal, isModalOpen, deleteState, currentUser }) => {
  return (
    <Modal show={isModalOpen === id} onHide={hideModal} centered>
      <ModalBody className="swal2-header">
        <div className="swal2-icon swal2-warning swal2-animate-warning-icon">
          <span className="swal2-icon-text">!</span>
        </div>
        <h2 className="swal2-title" id="swal2-title">
          {currentUser === id ? "You cannot Delete yourself" : "Are you sure?"}
        </h2>
        {currentUser !== id && <div id="swal2-content">You won't be able to revert this!</div>}
        <div className="swal2-actions">
          {currentUser !== id && (
            <Button variant="primary" className="swal2-confirm swal2-styled" onClick={deleteState}>
              Yes, delete it!
            </Button>
          )}
          <Button variant="secondary" className="swal2-cancel swal2-styled" onClick={() => hideModal(null)}>
            Cancel
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

ModalDelete.propTypes = {
  id: PropTypes.number.isRequired,
  hideModal: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.number.isRequired,
  currentUser: PropTypes.number.isRequired,
  deleteState: PropTypes.func.isRequired,
}
