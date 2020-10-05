import React, { Component } from "react"
import { Row, Col, Table, Button } from "react-bootstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { ServiceForm } from "@components/Dashboard/Project/Services/ServiceForm"
import { EditServiceForm } from "@components/Dashboard/Project/Services/EditServiceForm"
import { Dashboard } from "@components/Dashboard"
import { ModalDelete } from "@components/shared/ModalDelete"
import { Loading } from "@components/shared/Loading"
import { selectServices, loadingServices, servicesErrors } from "@selectors/quote"
import { getServices, addService, removeService, updateService, resetQuotesErrors } from "@actions/quote"
import styles from "./Services.module.css"

class QuoteService extends Component {
  state = {
    isModalOpen: null,
    service: null,
  }

  componentDidMount() {
    this.props.getServices()
  }

  toggleModal = isModalOpen => {
    this.setState({ isModalOpen })
  }

  editService = id => {
    const { services } = this.props
    this.setState({ service: services.find(service => service.id === id) })
  }

  render() {
    const { loading, services, removeService, error, addService, updateService } = this.props
    const { isModalOpen, service } = this.state

    if (loading) return <Loading />
    if (!services.length) return null
    return (
      <Dashboard>
        <div className="ms-panel">
          <div className="ms-panel-header">
            <h6>Project Services</h6>
          </div>
          <div className="ms-panel-body">
            <Table striped bordered hover className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Options</th>
                  <th>Edit</th>
                  <th>Delete?</th>
                </tr>
              </thead>
              <tbody>
                {services.map(({ id, name, price, addons }) => (
                  <tr key={id}>
                    <td>
                      {name} {id}
                    </td>
                    <td>{price} £</td>
                    <td>
                      {addons.length
                        ? addons.map(({ name, price }) => (
                            <p>
                              {name} - {price} £
                            </p>
                          ))
                        : "N/A"}
                    </td>
                    <td>
                      <Button id={id} variant="primary" onClick={() => this.editService(id)}>
                        Edit/Add Item
                      </Button>
                    </td>
                    <td>
                      <Button
                        id={id}
                        variant="primary"
                        onClick={() => {
                          this.toggleModal(id)
                        }}
                      >
                        Delete Item
                      </Button>
                      <ModalDelete
                        id={id}
                        hideModal={this.toggleModal}
                        isModalOpen={isModalOpen}
                        deleteState={() => removeService(id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <Row>
          <Col lg="6">
            {service ? (
              <EditServiceForm updateService={updateService} service={service} hideService={this.editService} />
            ) : (
              <ServiceForm error={error} addService={addService} />
            )}
          </Col>
        </Row>
      </Dashboard>
    )
  }
}

QuoteService.propTypes = {
  isModalOpen: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  services: PropTypes.arrayOf(PropTypes.object),
  removeService: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
  updateService: PropTypes.func.isRequired,
  service: PropTypes.number.isRequired,
  error: PropTypes.object,
}

const mapStateToProps = state => ({
  services: selectServices(state),
  loading: loadingServices(state),
  error: servicesErrors(state),
})

export default connect(mapStateToProps, { getServices, addService, removeService, updateService, resetQuotesErrors })(
  QuoteService
)
