import React, { Component } from "react"
import { Row, Col, Table, Button } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { AddressBookForm } from "@components/Dashboard/Project/AddressBook/AddressBookForm"
import { EditAddressBookForm } from "@components/Dashboard/Project/AddressBook/EditAddressBookForm"
import { Dashboard } from "@components/Dashboard"
import { ModalDelete } from "@components/shared/ModalDelete"
import { Loading } from "@components/shared/Loading"
import {
  getAddressBooks,
  removeAddressBook,
  resetAddressBooksErrors,
  addAddressBook,
  getPositions,
  updateAddressBook,
} from "@actions/addressbook"
import { selectClients, loadingClients, clientsErrors, selectPositions } from "@selectors/addressbook"

class AddressBook extends Component {
  state = {
    client: null,
    clientId: null,
  }

  componentDidMount() {
    this.props.getAddressBooks()
    this.props.getPositions()
  }

  editAddressBook = clientId => {
    const { clients } = this.props
    this.setState({ client: clients.find(client => client.id === clientId) })
  }

  showClient = clientId => {
    this.setState({ clientId })
  }

  render() {
    const {
      error,
      loading,
      clients,
      removeAddressBook,
      updateAddressBook,
      positions,
      resetAddressBooksErrors,
      addAddressBook,
    } = this.props
    const { clientId, client } = this.state

    if (loading) return <Loading />
    if (!clients.length) return null
    return (
      <Dashboard>
        <div className="ms-panel">
          <div className="ms-panel-header">
            <h6>Clients</h6>
          </div>
          <div className="ms-panel-body">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(({ users, id, companyName, addressName }) => {
                  const { email1, phoneNumber1 } = users[0]
                  return (
                    <tr key={id}>
                      <td>{companyName}</td>
                      <td>{addressName}</td>
                      <td>{email1}</td>
                      <td>{phoneNumber1}</td>
                      <td>
                        <Button id={id} onClick={() => this.editAddressBook(id)} variant="primary">
                          Edit Item
                        </Button>
                      </td>
                      <td>
                        <Button
                          id={id}
                          variant="primary"
                          onClick={() => {
                            this.showClient(id)
                          }}
                        >
                          Delete Item
                        </Button>
                        <ModalDelete
                          id={id}
                          hideModal={this.showClient}
                          isModalOpen={clientId}
                          deleteState={() => removeAddressBook(id)}
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </div>
        <Row>
          <Col lg="6">
            <div className="ms-panel">
              {client ? (
                <EditAddressBookForm
                  updateAddressBook={updateAddressBook}
                  error={error}
                  positions={positions}
                  client={client}
                  editAddressBook={this.editAddressBook}
                  resetAddressBooksErrors={resetAddressBooksErrors}
                />
              ) : (
                <AddressBookForm
                  error={error}
                  positions={positions}
                  resetAddressBooksErrors={resetAddressBooksErrors}
                  addAddressBook={addAddressBook}
                />
              )}
            </div>
          </Col>
        </Row>
      </Dashboard>
    )
  }
}

AddressBook.propTypes = {
  clientId: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  clients: PropTypes.array.isRequired,
  getAddressBooks: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  clients: selectClients(state),
  loading: loadingClients(state),
  error: clientsErrors(state),
  positions: selectPositions(state),
})

export default connect(mapStateToProps, {
  getAddressBooks,
  removeAddressBook,
  resetAddressBooksErrors,
  addAddressBook,
  getPositions,
  updateAddressBook,
})(AddressBook)
