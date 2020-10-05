import React, { Fragment } from "react"
import { FieldArray } from "formik"
import { FaTimes, FaPlus } from "react-icons/fa"
import { Button, Col, Row } from "react-bootstrap"
import { FormikField } from "@components/shared/Fields/FormikField"
import styles from "./Services.module.css"
import PropTypes from "prop-types"

export const Addons = ({ values, error }) => {
  return (
    <FieldArray
      name="addons"
      render={({ remove, push }) => (
        <>
          {values.addons.length > 0 &&
            values.addons.map((option, index) => (
              <>
                <Row>
                  <Col lg={10}>
                    <div className={styles.option}>
                      <h6>Option {index + 1}</h6>
                    </div>
                  </Col>
                  <Col lg={2} className={styles.button}>
                    {index === 0 ? (
                      <Button
                        onClick={() =>
                          push({
                            name: "",
                            price: "",
                          })
                        }
                        className="btn btn-success"
                        name="button"
                      >
                        <FaPlus />
                      </Button>
                    ) : (
                      <Button onClick={() => remove(index)} className="btn btn-danger" name="button">
                        <FaTimes />
                      </Button>
                    )}
                  </Col>
                </Row>
                <Fragment key={index}>
                  <FormikField
                    name={`addons.${index}.name`}
                    label="Name"
                    placeholder="Ex: Site Visit"
                    error={error && error.data[`name${index}`]}
                  />
                  <FormikField
                    name={`addons.${index}.price`}
                    label="Price"
                    placeholder="Ex: 400"
                    error={error && error.data[`price${index}`]}
                  />
                </Fragment>
              </>
            ))}
        </>
      )}
    />
  )
}

Addons.propTypes = {
  values: PropTypes.object.isRequired,
  error: PropTypes.string,
}
