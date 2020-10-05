import React from "react"
import { FormGroup, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { Field } from "formik"

export const FormikCheckbox = ({ label }) => {
  return (
    <Row>
      <FormGroup as={Col}>
        <label className="ms-checkbox-wrap">
          <Field type="checkbox" />
          <i className="ms-checkbox-check"></i>
        </label>
        <span>{label}</span>
      </FormGroup>
    </Row>
  )
}

FormikCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
}
