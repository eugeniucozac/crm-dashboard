import React from "react"
import { FormGroup, FormControl, FormLabel, Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"

export const TextField = ({ type, name, value, label, placeholder, onChange, error, disabled, success }) => {
  return (
    <Row>
      <FormGroup as={Col}>
        <FormLabel>{label}</FormLabel>
        {error && <div className="invalid-feedback">{error}</div>}
        {success && <div className="valid-feedback">{success}</div>}
        <FormControl
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          isValid={success}
          isInvalid={!!error}
          disabled={disabled}
        />
      </FormGroup>
    </Row>
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.object,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  success: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

TextField.defaultProps = {
  type: "text",
}
