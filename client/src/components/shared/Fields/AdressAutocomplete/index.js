import React from "react"
import PlacesAutocomplete from "react-places-autocomplete"
import { FormControl, Row, FormGroup, FormLabel, Col } from "react-bootstrap"
import { Field } from "formik"
import { RectLoading } from "@components/shared/RectLoading"
import PropTypes from "prop-types"
import styles from "./AdressAutocomplete.module.css"

export const AdressAutocomplete = ({ formik, name, label, setAddress, addressName, error }) => {
  return (
    <Row>
      <FormGroup as={Col}>
        <FormLabel>{label}</FormLabel>
        <PlacesAutocomplete
          value={addressName}
          onChange={setAddress}
          onSelect={setAddress}
          searchOptions={{
            componentRestrictions: { country: ["uk"] },
          }}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
            return (
              <div>
                {error && <div className="invalid-feedback">{error}</div>}
                {formik ? (
                  <Field
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    {...getInputProps({
                      placeholder: "Ex: 75 Pemberton Road, London",
                      name,
                    })}
                  />
                ) : (
                  <FormControl
                    {...getInputProps({
                      placeholder: "Ex: 75 Pemberton Road, London",
                      name,
                      isInvalid: !!error,
                    })}
                  />
                )}
                <div className={styles.autocomplete}>
                  {loading && <RectLoading />}
                  {suggestions.map(suggestion => {
                    return (
                      <div {...getSuggestionItemProps(suggestion)}>
                        <p className={styles.description}>{suggestion.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }}
        </PlacesAutocomplete>
      </FormGroup>
    </Row>
  )
}

AdressAutocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  setAddress: PropTypes.func.isRequired,
  addressName: PropTypes.string.isRequired,
  formik: PropTypes.bool.isRequired,
}
