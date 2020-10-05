import React, { Component } from "react"
import { connect } from "react-redux"
import { Col, Form, Row, Button } from "react-bootstrap"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"
import { changePassword, resetErrors } from "@actions/authorization"
import { authorizationErrors, selectAuthorizationId, changePasswordSuccess } from "@selectors/authorization"

class PasswordForm extends Component {
  state = {
    password: "",
    password2: "",
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
    const { changePassword, userId } = this.props
    const { password, password2 } = this.state

    await changePassword(userId, { password, password2 })
    this.setState({ password: "", password2: "" })
  }

  render() {
    const { password, password2 } = this.state
    const { error, success } = this.props

    return (
      <Form noValidate onSubmit={this.onSubmit}>
        <TextField
          type="password"
          name="password"
          value={password}
          label="New Password"
          placeholder="New Password"
          onChange={this.onChange}
          success={success && "Password was changed"}
          error={error && error.data.password}
        />
        <TextField
          type="password"
          name="password2"
          value={password2}
          label="Repeat New Password"
          placeholder="Repeat New Password"
          onChange={this.onChange}
          error={error && error.data.password2}
        />
        <Row>
          <Col>
            <Button variant="primary" type="submit" className="w-25 float-right">
              Change
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

PasswordForm.propTypes = {
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  changePassword: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.object,
}

const mapStateToProps = state => ({
  success: changePasswordSuccess(state),
  error: authorizationErrors(state),
  userId: selectAuthorizationId(state),
})

export default connect(mapStateToProps, { changePassword, resetErrors })(PasswordForm)
