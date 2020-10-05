import React, { Fragment } from "react"
import { Row, Col, FormGroup, FormLabel, Button } from "react-bootstrap"
import { FaTimes, FaPlus } from "react-icons/fa"
import { FieldArray, Field } from "formik"
import { serviceAddons } from "@data"
import Addons from "./Addons"
import PropTypes from "prop-types"

const Services = ({ indexSection, servicesExercises, alphabet, section, errors }) => {
  return (
    <FieldArray
      name={`sections.${indexSection}.services`}
      render={({ remove, push }) => (
        <>
          {section.services.length > 0 &&
            section.services.map((service, indexService) => {
              return (
                <Fragment key={indexService}>
                  <FormGroup as={Row}>
                    <Col lg={10}>
                      <Row>
                        <FormLabel column lg="2">
                          Service {alphabet[indexSection].toUpperCase()}.{indexService + 1}
                        </FormLabel>
                        <Col lg="10">
                          <Field
                            as="select"
                            name={`sections.${indexSection}.services.${indexService}.id`}
                            className={`form-control ${
                              errors.sections &&
                              errors.sections[indexSection] &&
                              errors.sections[indexSection].services &&
                              errors.sections[indexSection].services[indexService]
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option>Select Service</option>
                            {servicesExercises.map(service => (
                              <option key={service.id} value={service.id}>
                                {service.name} {service.price} £
                              </option>
                            ))}
                          </Field>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2}>
                      {indexService === 0 ? (
                        <Button
                          onClick={() => push(serviceAddons)}
                          className="btn btn-success mt-0 w-100"
                          name="button"
                        >
                          <FaPlus />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => remove(indexService)}
                          className="btn btn-danger mt-0 w-100"
                          name="button"
                        >
                          <FaTimes />
                        </Button>
                      )}
                    </Col>
                  </FormGroup>
                  <Addons
                    indexSection={indexSection}
                    indexService={indexService}
                    servicesExercises={servicesExercises}
                    service={service}
                    alphabet={alphabet}
                  />
                </Fragment>
              )
            })}
        </>
      )}
    />
  )
}

Services.propTypes = {
  servicesExercises: PropTypes.arrayOf(PropTypes.object),
  errors: PropTypes.object,
  section: PropTypes.object,
  values: PropTypes.object.isRequired,
  alphabet: PropTypes.array.isRequired,
  indexSection: PropTypes.number.isRequired,
}

export default Services
