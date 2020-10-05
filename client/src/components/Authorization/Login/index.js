import React, { Component } from "react"
import { Button, Form, FormLabel } from "react-bootstrap"
import { connect } from "react-redux"
import { compose } from "redux"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { TextField } from "@components/shared/Fields/TextField"
import { Layout } from "@components/Authorization/Layout"
import { login } from "@actions/authorization"
import { authorizationErrors, getUserIsAuthorized } from "@selectors/authorization"
import styles from "../Authorization.module.css"

class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  componentDidMount() {
    const { isAuthorized, history } = this.props
    isAuthorized && history.push("/dashboard/consultants")
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state
    const { login, history } = this.props

    try {
      await login({ email, password })
      history.push("/dashboard/consultants")
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { error } = this.props
    const { email, password } = this.state

    return (
      <Layout>
        <Form className={styles.form} noValidate onSubmit={this.onSubmit}>
          <h2>Login to Account</h2>
          <p>Please enter your email and password to continue</p>
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
            type="password"
            name="password"
            value={password}
            label="Password"
            placeholder="Password"
            onChange={this.onChange}
            error={error && error.data.password}
          />
          <FormLabel>
            <Link to="/forgot">Forgot Password?</Link>
          </FormLabel>
          <Button variant="primary" type="submit" size="lg" block>
            Sign In
          </Button>
        </Form>
      </Layout>
    )
  }
}

Login.propTypes = {
  error: PropTypes.object,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  error: authorizationErrors(state),
  isAuthorized: getUserIsAuthorized(state),
})

export default compose(withRouter, connect(mapStateToProps, { login }))(Login)
