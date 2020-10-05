import React from "react"
import { FormGroup, FormControl, FormLabel, Row, Col, Button } from "react-bootstrap"
import { FaPlus } from "react-icons/fa"
import PropTypes from "prop-types"

export const SelectField = ({ name, label, onChange, isModalOpen, hardwares, showModal, add, error }) => {
  if (!hardwares.length) return null
  return (
    <Row>
      <FormGroup as={Col}>
        <FormLabel>{label} Name</FormLabel>
        {error && <div className={`invalid-feedback ${add && "add"}`}>{error}</div>}
        <Row className="hardware margin-label">
          <Col lg={add ? 10 : null}>
            <FormControl as="select" name={name} onChange={onChange} disabled={isModalOpen} isInvalid={!!error}>
              <option value={isModalOpen}>Select {label} Name</option>
              {hardwares.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </FormControl>
          </Col>
          {add && (
            <Col lg={2}>
              <Button onClick={() => showModal(label, add)} className="btn btn-success" name="button">
                <FaPlus />
              </Button>
            </Col>
          )}
        </Row>
      </FormGroup>
    </Row>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hardwares: PropTypes.object.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  add: PropTypes.bool.isRequired,
}
