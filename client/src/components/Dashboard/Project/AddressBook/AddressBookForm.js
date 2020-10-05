import React, { Component, Fragment } from "react"
import { Button, Col, Row, Form } from "react-bootstrap"
import { FaTimes, FaPlus } from "react-icons/fa"
import { Formik, FieldArray } from "formik"
import { FormikField } from "@components/shared/Fields/FormikField"
import { FormikSelect } from "@components/shared/Fields/FormikSelect"
import { AdressAutocomplete } from "@components/shared/Fields/AdressAutocomplete/index"
import { addressBookuser } from "@data"
import PropTypes from "prop-types"
import styles from "./AddressBook.module.css"

export class AddressBookForm extends Component {
  state = {
    companyName: "",
    users: [addressBookuser],
  }

  componentDidMount() {
    this.props.resetAddressBooksErrors()
  }

  onSubmit = async (e, state, resetForm) => {
    e.preventDefault()
    const { addressName } = this.state
    const { addAddressBook } = this.props
    await addAddressBook({ addressName, ...state })
    resetForm()
    this.setState({
      addressName: "",
    })
  }

  render() {
    const { error, positions } = this.props
    const { addressName } = this.state

    return (
      <>
        <div className="ms-panel-header">
          <h6>Add a client</h6>
        </div>
        <div className="ms-panel-body">
          <Formik initialValues={this.state}>
            {({ values, resetForm }) => (
              <Form noValidate onSubmit={e => this.onSubmit(e, values, resetForm)}>
                <FormikField
                  name="companyName"
                  label="Company Name"
                  placeholder="Ex: KP Acoustics"
                  error={error && error.data.companyName}
                />
                <AdressAutocomplete
                  formik
                  label="Address"
                  addressName={addressName}
                  setAddress={addressName => this.setState({ addressName })}
                  error={error && error.data.addressName}
                />
                <FieldArray
                  name="users"
                  render={({ remove, push }) => (
                    <>
                      {values.users.length > 0 &&
                        values.users.map((user, index) => (
                          <Row>
                            <Col lg={10}>
                              <div className={styles.employee}>
                                <h6>Employee {index + 1}</h6>
                              </div>
                            </Col>
                            <Col lg={2} className={styles.button}>
                              {index === 0 ? (
                                <Button onClick={() => push(addressBookuser)} className="btn btn-success" name="button">
                                  <FaPlus />
                                </Button>
                              ) : (
                                <Button onClick={() => remove(index)} className="btn btn-danger" name="button">
                                  <FaTimes />
                                </Button>
                              )}
                            </Col>
                            <Fragment key={index}>
                              <Col lg={6}>
                                <FormikField
                                  name={`users.${index}.firstName`}
                                  label="First Name"
                                  placeholder="Ex: John"
                                  error={error && error.data[`firstName${index}`]}
                                />
                              </Col>
                              <Col lg={6}>
                                <FormikField
                                  name={`users.${index}.lastName`}
                                  label="Last Name"
                                  placeholder="Ex: Doe"
                                  error={error && error.data[`lastName${index}`]}
                                />
                              </Col>
                              <Col lg={6}>
                                <FormikField
                                  name={`users.${index}.email1`}
                                  label="Email 1"
                                  placeholder="Ex: email@example.com"
                                  type="email"
                                  error={error && error.data[`email${index}`]}
                                />
                              </Col>
                              <Col lg={6}>
                                <FormikField
                                  name={`users.${index}.email2`}
                                  label="Email 2 (Optional)"
                                  placeholder="Ex: email@example.com"
                                  type="email"
                                />
                              </Col>
                              <Col lg={6}>
                                <FormikField
                                  name={`users.${index}.phoneNumber1`}
                                  label="Phone Number 1"
                                  placeholder="Ex: 020 8222 8778"
                                  error={error && error.data[`phoneNumber${index}`]}
                                />
                              </Col>
                              <Col lg={6}>
                                <FormikField
                                  name={`users.${index}.phoneNumber2`}
                                  label="Phone Number 2 (Optional)"
                                  placeholder="Ex: 020 8222 8779"
                                />
                              </Col>
                              <Col>
                                <FormikSelect
                                  name={`users.${index}.roleId`}
                                  label="Choose position name"
                                  positions={positions}
                                  error={error && error.data[`roleId${index}`]}
                                />
                              </Col>
                            </Fragment>
                          </Row>
                        ))}
                    </>
                  )}
                />
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
      </>
    )
  }
}

AddressBookForm.propTypes = {
  companyName: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  addressName: PropTypes.string.isRequired,
  addAddressBook: PropTypes.func.isRequired,
  error: PropTypes.string,
  positions: PropTypes.array.isRequired,
}
