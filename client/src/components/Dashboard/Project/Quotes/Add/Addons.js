import React from "react"
import { Row, Col, FormGroup, FormControl } from "react-bootstrap"
import { FieldArray, Field } from "formik"
import PropTypes from "prop-types"

const Addons = ({ indexSection, indexService, servicesExercises, service, alphabet }) => {
  return (
    <FieldArray
      name={`sections.${indexSection}.services.${indexService}.addons`}
      render={() => (
        <>
          {servicesExercises.map(servicesExercise => {
            if (servicesExercise.id == service.id) {
              return servicesExercise.addons.map((addon, indexAddon) => (
                <FormGroup as={Row}>
                  <Col lg={1}>
                    <i>
                      {alphabet[indexSection].toUpperCase()}.{indexService + 1}.{indexAddon + 1}
                    </i>
                  </Col>
                  <Col lg={10}>
                    <Field
                      render={arrayHelpers => {
                        return (
                          <FormGroup as={Col} className="mb-0 ml-4">
                            <label className="ms-checkbox-wrap">
                              <FormControl
                                type="checkbox"
                                name={`sections.${indexSection}.services.${indexService}.addons.${indexAddon}`}
                                className="form-check-input"
                                onChange={e => {
                                  var data =
                                    arrayHelpers.field.value.sections[indexSection].services[indexService].addons
                                  if (e.target.checked) {
                                    data.push(addon.id)
                                  } else {
                                    const idx = data.indexOf(addon.id)
                                    data.splice(idx, 1)
                                  }
                                }}
                              />
                              <i className="ms-checkbox-check"></i>
                            </label>
                            <span>{addon.name}</span>
                          </FormGroup>
                        )
                      }}
                    />
                  </Col>
                </FormGroup>
              ))
            }
          })}
        </>
      )}
    />
  )
}

Addons.propTypes = {
  indexSection: PropTypes.number.isRequired,
  indexService: PropTypes.number.isRequired,
  servicesExercises: PropTypes.arrayOf(PropTypes.object),
  isModalOpen: PropTypes.bool.isRequired,
  service: PropTypes.string.isRequired,
  alphabet: PropTypes.array.isRequired,
}

export default Addons
