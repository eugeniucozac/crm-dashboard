import React from "react"
import { FormGroup, FormControl, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"

export const CheckboxField = ({ name, value, label, onChange }) => {
  return (
    <Row>
      <FormGroup as={Col}>
        <label className="ms-checkbox-wrap">
          <FormControl
            type="checkbox"
            onChange={onChange}
            className="form-check-input"
            name={name}
            value={value}
            checked={value}
          />
          <i className="ms-checkbox-check"></i>
        </label>
        <span>{label}</span>
      </FormGroup>
    </Row>
  )
}

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
