import React from "react"
import { FormGroup, FormLabel, Col, Row } from "react-bootstrap"
import { Field } from "formik"
import PropTypes from "prop-types"

export const FormikSelect = ({ name, label, positions, error }) => {
  return (
    <Row>
      <FormGroup as={Col}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        {error && <div className="invalid-feedback">{error}</div>}
        <Field component="select" name={name} className={`form-control ${error ? "is-invalid" : ""}`}>
          <option value>{label}</option>
          {positions.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </Field>
      </FormGroup>
    </Row>
  )
}

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.object),
}
