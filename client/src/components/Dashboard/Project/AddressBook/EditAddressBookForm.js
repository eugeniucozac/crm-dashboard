import React, { Component, Fragment } from "react"
import { Button, Col, Row, Form } from "react-bootstrap"
import { FaTimes, FaPlus } from "react-icons/fa"
import { Formik, FieldArray } from "formik"
import { FormikField } from "@components/shared/Fields/FormikField"
import { FormikSelect } from "@components/shared/Fields/FormikSelect"
import { AdressAutocomplete } from "@components/shared/Fields/AdressAutocomplete/index"
import { CheckboxField } from "@components/shared/Fields/CheckboxField"
import { addressBookuser } from "@data"
import PropTypes from "prop-types"
import styles from "./AddressBook.module.css"

export class EditAddressBookForm extends Component {
  state = {
    companyName: this.props.client.companyName,
    addressName: this.props.client.addressName,
    users: [],
    usersToDelete: [],
  }

  componentDidMount() {
    this.props.resetAddressBooksErrors()
  }

  onChange = (e, userId) => {
    const { usersToDelete } = this.state
    const { checked } = e.target
    checked
      ? this.setState({ usersToDelete: [...usersToDelete, userId] })
      : this.setState({ usersToDelete: usersToDelete.filter(user => user !== userId) })
  }

  onSubmit = async (e, state) => {
    e.preventDefault()
    const { addressName, usersToDelete } = this.state
    const { companyName, users } = state
    const { updateAddressBook, client, editAddressBook } = this.props
    await updateAddressBook(client.id, { addressName, companyName, usersToDelete, users })
    editAddressBook(null)
  }

  render() {
    const {
      error,
      positions,
      editAddressBook,
      client: { users },
    } = this.props
    const { addressName, companyName } = this.state

    return (
      <>
        <div className="ms-panel-header">
          <h6>Edit client</h6>
        </div>
        <div className="ms-panel-body">
          <Formik initialValues={this.state}>
            {({ errors, values }) => (
              <Form noValidate onSubmit={e => this.onSubmit(e, values)}>
                <FormikField
                  value={companyName}
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
                <Row>
                  {users.map((user, index) => (
                    <>
                      <Col lg={10}>
                        <div className={styles.employee}>
                          <div className="h6">
                            Employee {index + 1}:
                            <a>
                              &nbsp;{user.firstName} {user.lastName}
                            </a>
                            , <a>&nbsp;{user.email1}</a>
                          </div>
                        </div>
                      </Col>
                      {index !== 0 && (
                        <Col lg={2} className={styles.button}>
                          <CheckboxField name="userId" label="Remove?" onChange={e => this.onChange(e, user.id)} />
                        </Col>
                      )}
                    </>
                  ))}
                </Row>
                <FieldArray
                  name="users"
                  render={({ remove, push }) => (
                    <>
                      <Row>
                        <Col lg={10}>
                          <div className={styles.employee}>
                            <h6>Add new employee</h6>
                          </div>
                        </Col>
                        <Col lg={2} className={styles.button}>
                          <Button onClick={() => push(addressBookuser)} className="btn btn-success" name="button">
                            <FaPlus />
                          </Button>
                        </Col>
                      </Row>
                      {values.users.length > 0 &&
                        values.users.map((user, index) => (
                          <Row>
                            <Col lg={10}>
                              <div className={styles.employee}>
                                <h6>Employee {index + users.length + 1}</h6>
                              </div>
                            </Col>
                            <Col lg={2} className={styles.button}>
                              <Button onClick={() => remove(index)} className="btn btn-danger" name="button">
                                <FaTimes />
                              </Button>
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
                                  label="Phone Number 2"
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
                      Update
                    </Button>
                    <Button className="btn btn-primary w-25 mr-1 float-right" onClick={() => editAddressBook(null)}>
                      Cancel
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

EditAddressBookForm.propTypes = {
  companyName: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  usersToDelete: PropTypes.array.isRequired,
  client: PropTypes.object.isRequired,
  addressName: PropTypes.string.isRequired,
  editAddressBook: PropTypes.func.isRequired,
  updateAddressBook: PropTypes.func.isRequired,
  error: PropTypes.string,
  positions: PropTypes.array.isRequired,
}
