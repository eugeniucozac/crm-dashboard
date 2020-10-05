import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import Header from "@components/Header"
import withAuthorization from "@components/Routes/withAuthorization"

class AuthorizedRoute extends Component {
  render() {
    const { authorization, component: Component, roles, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={props => {
          if (authorization.isAuthorized) {
            if (!roles || roles.includes(authorization.data.roleName)) {
              return (
                <>
                  <Header />
                  <Component {...this.props} />
                </>
              )
            }
            return <Redirect to="/dashboard/consultants" />
          }
          return <Redirect to="/login" />
        }}
      />
    )
  }
}

export default withAuthorization(AuthorizedRoute)
