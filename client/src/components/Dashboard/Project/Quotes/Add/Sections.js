import React, { Fragment } from "react"
import { Row, Col, FormGroup, FormLabel, Button } from "react-bootstrap"
import { FaTimes, FaPlus } from "react-icons/fa"
import { FieldArray, Field } from "formik"
import Services from "./Services"
import { serviceAddons } from "@data"
import PropTypes from "prop-types"

const Sections = ({ servicesExercises, alphabet, errors, values }) => {
  return (
    <FieldArray
      name="sections"
      render={({ remove, push }) => (
        <>
          {values.sections.length > 0 &&
            values.sections.map((section, indexSection) => {
              return (
                <Fragment key={indexSection}>
                  <FormGroup as={Row}>
                    <Col lg={10}>
                      <Row>
                        <FormLabel column lg="2">
                          Section {alphabet[indexSection].toUpperCase()}
                        </FormLabel>
                        <Col lg="10">
                          <Field
                            type="text"
                            placeholder="Post-tender acoustic monitoring"
                            className={`form-control ${
                              errors.sections && errors.sections[indexSection] && errors.sections[indexSection].name
                                ? "is-invalid"
                                : ""
                            }`}
                            name={`sections.${indexSection}.name`}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2}>
                      {indexSection === 0 ? (
                        <Button
                          onClick={() =>
                            push({
                              name: "",
                              services: [serviceAddons],
                            })
                          }
                          className="btn btn-success mt-0 w-100"
                          name="button"
                        >
                          <FaPlus />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => remove(indexSection)}
                          className="btn btn-danger mt-0 w-100"
                          name="button"
                        >
                          <FaTimes />
                        </Button>
                      )}
                    </Col>
                  </FormGroup>
                  <Services
                    indexSection={indexSection}
                    servicesExercises={servicesExercises}
                    section={section}
                    alphabet={alphabet}
                    errors={errors}
                  />
                </Fragment>
              )
            })}
        </>
      )}
    />
  )
}

Sections.propTypes = {
  servicesExercises: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  values: PropTypes.object.isRequired,
  alphabet: PropTypes.array.isRequired,
}

export default Sections
