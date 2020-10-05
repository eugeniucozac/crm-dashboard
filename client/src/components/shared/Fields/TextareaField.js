import React from "react"
import { FormGroup, FormControl, FormLabel, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"

export const TextareaField = ({ name, value, label, onChange, error, rows = 3 }) => {
  return (
    <Row>
      <FormGroup as={Col}>
        <FormLabel>{label}</FormLabel>
        {error && <div className="invalid-feedback">{error}</div>}
        <FormControl
          as="textarea"
          rows={rows}
          name={name}
          value={value}
          placeholder={label}
          onChange={onChange}
          isInvalid={!!error}
        />
      </FormGroup>
    </Row>
  )
}

TextareaField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
