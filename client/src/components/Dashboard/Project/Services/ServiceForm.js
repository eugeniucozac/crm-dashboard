import React, { Component, Fragment } from "react"
import { Button, Form, Col, Row } from "react-bootstrap"
import { Formik } from "formik"
import PropTypes from "prop-types"
import { CheckboxField } from "@components/shared/Fields/CheckboxField"
import { FormikField } from "@components/shared/Fields/FormikField"
import { TextareaField } from "@components/shared/Fields/TextareaField"
import { FieldArray } from "formik"
import { FaTimes, FaPlus } from "react-icons/fa"
//import { Addons } from "./Addons"
import styles from "./Services.module.css"

export class ServiceForm extends Component {
  state = {
    addOptions: false,
    addons: [
      {
        name: "",
        price: "",
      },
    ],
  }

  onChange = e => {
    const { name, value, type, checked } = e.target
    this.setState({ [name]: value })
    if (type === "checkbox") {
      checked ? this.setState({ addOptions: true }) : this.setState({ addOptions: false })
    }
  }

  onSubmit = async (e, state, resetForm) => {
    e.preventDefault()
    const { addService } = this.props
    const { addOptions } = this.state
    const { name, price, addons, content } = state
    await addService({ name, price })
    console.log(addOptions)
    //resetForm()
    /* if (addOptions) {
      await addService({ name, price, addons, content })
    } else {
      await addService({ name, price, content })
    }
 */
  }

  render() {
    const { addOptions } = this.state
    const { error } = this.props
    console.log(error)
    return (
      <div className="ms-panel">
        <div className="ms-panel-header">
          <h6>Add Service</h6>
        </div>
        <div className="ms-panel-body">
          <Formik initialValues={this.state}>
            {({ values, resetForm }) => (
              <Form noValidate onSubmit={e => this.onSubmit(e, values, resetForm)}>
                <FormikField name="name" label="Name" placeholder="Ex: Site Visit" error={error && error.data.name} />
                <FormikField name="price" label="Price" placeholder="Ex: 400" error={error && error.data.price} />
                <FormikField
                  name="content"
                  component="textarea"
                  label="Content"
                  placeholder="Ex: Description"
                  rows="15"
                  error={error && error.data.content}
                />
                <CheckboxField name="addOptions" label="Add Options?" onChange={this.onChange} />
                {addOptions && (
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
                )}
                <Row>
                  <Col className="mt-3">
                    <Button variant="primary" type="submit" className="w-25 float-right">
                      Add
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  }
}

ServiceForm.propTypes = {
  addService: PropTypes.func.isRequired,
  addOptions: PropTypes.bool.isRequired,
  error: PropTypes.object,
  addons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
    })
  ),
}
