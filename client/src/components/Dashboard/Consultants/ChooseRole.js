import React, { Component } from "react"
import { FormControl } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getRoles } from "@actions/consultant"
import { selectRole } from "@selectors/consultant"

class ChooseRole extends Component {
  componentDidMount() {
    this.props.getRoles()
  }

  render() {
    const { roleId, roles, changeRole } = this.props
    if (!roles.length) return null
    return (
      <FormControl as="select" name="roleId" onChange={changeRole} defaultValue={roleId}>
        {roles.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </FormControl>
    )
  }
}

ChooseRole.propTypes = {
  roleId: PropTypes.number.isRequired,
  roles: PropTypes.array.isRequired,
  getRoles: PropTypes.func.isRequired,
  changeRole: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  roles: selectRole(state),
})

export default connect(mapStateToProps, { getRoles })(ChooseRole)
