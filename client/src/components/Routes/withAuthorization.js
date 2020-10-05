import React, { Component } from "react"
import { connect } from "react-redux"
import { selectAuthorization } from "@selectors/authorization"

const withAuthorization = WrappedComponent => {
  class WithAuthorization extends Component {
    render() {
      return <WrappedComponent authorization={this.props.authorization} {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    authorization: selectAuthorization(state),
  })
  return connect(mapStateToProps)(WithAuthorization)
}

export default withAuthorization
