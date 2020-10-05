import React from "react"
import { calibrations } from "@data"
import { FormGroup, FormControl, FormLabel } from "react-bootstrap"
import PropTypes from "prop-types"

export const NextCalibration = ({ name, label, onChange, error, value }) => {
  if (!calibrations.length) return null
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <FormControl as="select" name={name} defaultValue={value} onChange={onChange} isInvalid={!!error}>
        <option>Choose Calibration</option>
        {calibrations.map(calibration => (
          <option key={calibration.charAt(0)} value={calibration.charAt(0)}>
            {calibration}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  )
}

NextCalibration.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  calibrations: PropTypes.array.isRequired,
}
