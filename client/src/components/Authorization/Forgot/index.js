import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Button, Form, FormLabel } from "react-bootstrap"
import { TextField } from "@components/shared/Fields/TextField"
import { Layout } from "@components/Authorization/Layout"
import { forgotPassword, resetErrors } from "@actions/authorization"
import { sentPasswordSuccess, authorizationErrors } from "@selectors/authorization"
import styles from "../Authorization.module.css"

class Forgot extends Component {
  state = {
    email: "",
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
    const { email } = this.state
    const { forgotPassword } = this.props

    try {
      await forgotPassword({ email })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { error, passwordRecovery } = this.props
    const { email } = this.state

    return (
      <Layout>
        <Form className={styles.form} noValidate onSubmit={this.onSubmit}>
          <h2>Password recover</h2>
          {passwordRecovery ? (
            <>
              <p className="green-text text-left">Password was send Successfully to your Email!</p>
              <FormLabel>
                <Link to="/">Go to Login Page</Link>
              </FormLabel>
            </>
          ) : (
            <>
              <p>Please enter your email to continue</p>
              <TextField
                type="email"
                name="email"
                value={email}
                label="Email Address"
                placeholder="Email Address"
                onChange={this.onChange}
                error={error && error.data.email}
              />
              <FormLabel>
                <Link to="/">Go to Home</Link>
              </FormLabel>
              <Button variant="primary" type="submit" size="lg" block>
                Send Password
              </Button>
            </>
          )}
        </Form>
      </Layout>
    )
  }
}

Forgot.propTypes = {
  error: PropTypes.object,
  email: PropTypes.string.isRequired,
  passwordRecovery: PropTypes.bool.isRequired,
  forgotPassword: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  passwordRecovery: sentPasswordSuccess(state),
  error: authorizationErrors(state),
})

export default connect(mapStateToProps, { forgotPassword, resetErrors })(Forgot)
