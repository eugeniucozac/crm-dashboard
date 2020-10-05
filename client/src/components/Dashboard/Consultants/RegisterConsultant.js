import React, { Component } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    telNo: "",
    mobNo: "",
    password: "",
    password2: "",
    roleId: 5,
  }

  componentWillUnmount() {
    this.props.resetErrors()
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { addConsultant } = this.props
    const { firstName, lastName, email, telNo, mobNo, password, password2, roleId } = this.state

    try {
      await addConsultant({
        firstName,
        lastName,
        email,
        telNo,
        mobNo,
        password,
        password2,
        roleId,
      })
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        telNo: "",
        mobNo: "",
        password: "",
        password2: "",
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { firstName, lastName, email, telNo, mobNo, password, password2 } = this.state
    const { error } = this.props

    return (
      <Form noValidate onSubmit={this.onSubmit}>
        <TextField
          name="firstName"
          value={firstName}
          label="First Name"
          placeholder="First Name"
          onChange={this.onChange}
          error={error && error.data.firstName}
        />
        <TextField
          name="lastName"
          value={lastName}
          label="Last Name"
          placeholder="Last Name"
          onChange={this.onChange}
          error={error && error.data.lastName}
        />
        <TextField
          type="email"
          name="email"
          value={email}
          label="Email Address"
          placeholder="Email Address"
          onChange={this.onChange}
          error={error && error.data.email}
        />
        <TextField
          name="telNo"
          value={telNo}
          label="Phone Number"
          placeholder="Phone Number"
          onChange={this.onChange}
          error={error && error.data.telNo}
        />
        <TextField
          name="mobNo"
          value={mobNo}
          label="Mobile Number"
          placeholder="Mobile Number"
          onChange={this.onChange}
          error={error && error.data.mobNo}
        />
        <TextField
          type="password"
          name="password"
          value={password}
          label="Password"
          placeholder="Password"
          onChange={this.onChange}
          error={error && error.data.password}
        />
        <TextField
          type="password"
          name="password2"
          value={password2}
          label="Confirm Password"
          placeholder="Confirm Password"
          onChange={this.onChange}
          error={error && error.data.password2}
        />
        <Row>
          <Col>
            <Button variant="primary" type="submit" className="w-25 float-right">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

Register.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  roleId: PropTypes.number.isRequired,
  telNo: PropTypes.string.isRequired,
  mobNo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
}

export default Register
