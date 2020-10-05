import React, { Component } from "react"
import { connect } from "react-redux"
import { Form, Button, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"
import { Layout } from "@components/Authorization/Layout"
import { resetPassword, checkToken, resetErrors } from "@actions/authorization"
import { selectAuthorizationId, authorizationErrors } from "@selectors/authorization"
import { Link } from "react-router-dom"
import styles from "./Reset.module.css"

class Reset extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
  }

  componentDidMount() {
    const { location, checkToken } = this.props
    const token = location.pathname.split("/").pop(-1)
    checkToken(token)
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
    const { resetPassword, userId, history } = this.props
    const { password, password2 } = this.state
    try {
      await resetPassword(userId, {
        password,
        password2,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      })
      history.push("/login")
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { error } = this.props
    const { password, password2 } = this.state

    return (
      <Layout>
        {error && error.data && error.data.token ? (
          <>
            <Row className={styles.error}>
              <Col>
                <p>{error.data.token}</p>
                <p>
                  <Link to="/">Go to Login Page</Link>
                </p>
              </Col>
            </Row>
          </>
        ) : (
          <Form className={styles.form} noValidate onSubmit={this.onSubmit}>
            <h2>Password reset</h2>
            <p>Please enter your new password to continue</p>
            <TextField
              type="password"
              name="password"
              value={password}
              label="New Password"
              placeholder="New Password"
              onChange={this.onChange}
              error={error && error.data.password}
            />
            <TextField
              type="password"
              name="password2"
              value={password2}
              label="Repeat Password"
              placeholder="Repeat Password"
              onChange={this.onChange}
              error={error && error.data.password2}
            />
            <Button variant="primary" type="submit" size="lg" block>
              Change Password
            </Button>
          </Form>
        )}
      </Layout>
    )
  }
}

Reset.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  resetPassword: PropTypes.func.isRequired,
  checkToken: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  error: authorizationErrors(state),
  userId: selectAuthorizationId(state),
})

export default connect(mapStateToProps, { resetPassword, checkToken, resetErrors })(Reset)
