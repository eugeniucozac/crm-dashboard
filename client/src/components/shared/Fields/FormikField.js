import React from "react"
import { FormGroup, FormLabel, Col, Row } from "react-bootstrap"
import { Field } from "formik"
import PropTypes from "prop-types"

export const FormikField = ({ type, name, label, placeholder, error, component }) => {
  return (
    <Row>
      <FormGroup as={Col}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        {error && <div className="invalid-feedback">{error}</div>}
        <Field
          type={type}
          name={name}
          component={component}
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder={placeholder}
        />
      </FormGroup>
    </Row>
  )
}

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

FormikField.defaultProps = {
  type: "text",
}
