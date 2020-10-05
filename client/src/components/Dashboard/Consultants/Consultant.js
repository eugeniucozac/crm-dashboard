import React, { Component } from "react"
import { Button, FormControl } from "react-bootstrap"
import PropTypes from "prop-types"
import ChooseRole from "@components/Dashboard/Consultants/ChooseRole"
import { ModalDelete } from "@components/shared/ModalDelete"

export class Consultant extends Component {
  state = {
    password: "",
    roleId: "",
    isModalOpen: null,
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  toggleModal = isModalOpen => {
    this.setState({ isModalOpen })
  }

  updateConsultant = async (id, e) => {
    e.preventDefault()
    let body = {}
    const { password, roleId } = this.state
    const { consultant, updateConsultant } = this.props

    if (consultant.id === id) {
      if (roleId !== "") {
        body = {
          ...body,
          roleId,
        }
      }
      if (password !== "") {
        body = {
          ...body,
          password,
          password2: password,
        }
      }
    }

    try {
      await updateConsultant(id, body)
      this.refs.password.value = ""
      this.setState({ password: "" })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { isModalOpen } = this.state
    const {
      consultant: { id, firstName, lastName, email, role, telNo, mobNo, title },
      roleName,
      authorizedId,
      removeConsultant,
    } = this.props

    return (
      <>
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>{telNo}</td>
          <td>{mobNo}</td>
          <td>{title}</td>
          {roleName === "admin" ? (
            <>
              <td>
                <ChooseRole key={id} roleId={role.id} changeRole={this.onChange} />
              </td>
              <td>
                <FormControl
                  ref="password"
                  onChange={this.onChange}
                  name="password"
                  placeholder="New Password"
                  type="text"
                />
              </td>
              <td>
                <Button variant="primary" onClick={e => this.updateConsultant(id, e)}>
                  Update User
                </Button>
              </td>
              <td>
                <Button id={id} variant="primary" onClick={() => this.toggleModal(id)}>
                  Remove User
                </Button>
              </td>
            </>
          ) : (
            <td>{role.name}</td>
          )}
        </tr>
        <ModalDelete
          id={id}
          hideModal={this.toggleModal}
          isModalOpen={isModalOpen}
          deleteState={() => removeConsultant(id)}
          currentUser={authorizedId}
        />
      </>
    )
  }
}

Consultant.propTypes = {
  isModalOpen: PropTypes.number.isRequired,
  roleId: PropTypes.number.isRequired,
  authorizedId: PropTypes.number.isRequired,
  password: PropTypes.string.isRequired,
  updateConsultant: PropTypes.func.isRequired,
  removeConsultant: PropTypes.func.isRequired,
  roleName: PropTypes.string.isRequired,
  consultant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.object.isRequired,
    telNo: PropTypes.string.isRequired,
    mobNo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}
