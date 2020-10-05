import React, { Component } from "react"
import { connect } from "react-redux"
import { FaPlus } from "react-icons/fa"
import { Button } from "react-bootstrap"
import CreateIssue from "@components/Dashboard/Issues/CreateIssue"
import FilteredIssues from "@components/Dashboard/Inventory/Issues/FilteredIssues"
import { RectLoading } from "@components/shared/RectLoading"
import { getIssues, addIssue, changeIssueStatus } from "@actions/issue"
import { updateKit, updateHardware } from "@actions/inventory"
import { getConsultants } from "@actions/consultant"
import { selectConsultants } from "@selectors/consultant"
import { selectIssuesByCategoryAndId, loadingIssues } from "@selectors/issue"
import { selectRoleAuthorization, selectAuthorizationId } from "@selectors/authorization"
import styles from "./Issues.module.css"
import PropTypes from "prop-types"

class InventoryIssues extends Component {
  state = {
    isFaulty: false,
    createIssue: null,
    status: "Open",
    kit: {},
  }

  componentDidMount() {
    const { inventory, kits, category } = this.props
    this.props.getIssues()
    this.props.getConsultants()
    if (category.name === "Kit") {
      const kit = kits.find(kit => kit.id == inventory.id)
      this.setState({ isFaulty: kit.isFaulty, kit })
    }
  }

  onChange = e => {
    const { name, value, type, checked } = e.target
    this.setState({ [name]: value })
    if (type === "checkbox") {
      checked ? this.setState({ isFaulty: true }) : this.setState({ isFaulty: false })
    }
  }

  toggleIssue = createIssue => {
    this.setState({ createIssue })
  }

  changeStatus = status => {
    this.setState({ status })
  }

  addIssue = async e => {
    e.preventDefault()
    const { addIssue, consultantId, inventory, updateKit, category } = this.props
    const {
      title,
      message,
      isFaulty,
      kit: { calibrationNumber, calibrationCurDate, calibrationDueDate },
    } = this.state

    try {
      await addIssue({
        consultantId,
        hardwareId: inventory.id,
        hardwareName: inventory.name,
        statusId: 1,
        categoryId: category.id,
        title,
        message,
      })

      category.name === "Kit" &&
        updateKit(inventory.id, {
          calibrationNumber,
          isFaulty,
          calibrationCurDate,
          calibrationDueDate,
        })

      this.setState({
        createIssue: null,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {
      inventory,
      consultants,
      issuesByCatAndId,
      roleName,
      loading,
      category,
      resetIssueErrors,
      toggleIssues,
      changeIssueStatus,
      error,
    } = this.props
    const { isFaulty, createIssue, status } = this.state
    const issues = issuesByCatAndId.filter(item => item.status.name === status)
    if (loading) return <RectLoading />

    return (
      <>
        <div className="ms-email-content">
          <ul class="nav nav-tabs d-flex mb-4 justify-content-center">
            {(roleName === "admin" || roleName === "technical-manager") && issuesByCatAndId.length ? (
              <>
                <li>
                  <Button className={styles.open} onClick={() => this.changeStatus("Open")}>
                    Open
                  </Button>
                </li>
                <li>
                  <Button className={styles.closed} onClick={() => this.changeStatus("Closed")}>
                    Closed
                  </Button>
                </li>
              </>
            ) : null}
          </ul>
          <Button className="swal2-close" onClick={() => toggleIssues(null)}>
            ×
          </Button>
          <FilteredIssues
            inventory={inventory}
            roleName={roleName}
            status={status}
            issues={issues}
            changeIssueStatus={changeIssueStatus}
          />
        </div>
        <Button className="float-right add-issue" onClick={() => this.toggleIssue(inventory.id)}>
          <FaPlus />
        </Button>
        {createIssue && (
          <CreateIssue
            toggleIssue={this.toggleIssue}
            consultants={consultants}
            addIssue={this.addIssue}
            onChange={this.onChange}
            isFaulty={isFaulty}
            resetIssueErrors={resetIssueErrors}
            categoryName={category.name}
            error={error}
          />
        )}
      </>
    )
  }
}

InventoryIssues.propTypes = {
  isFaulty: PropTypes.bool.isRequired,
  createIssue: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  kit: PropTypes.object.isRequired,
  inventory: PropTypes.object.isRequired,
  kits: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.object.isRequired,
  consultantId: PropTypes.number.isRequired,
  consultants: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  roleName: PropTypes.string.isRequired,
  toggleIssues: PropTypes.func.isRequired,
  changeIssueStatus: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

const mapStateToProps = (state, props) => ({
  roleName: selectRoleAuthorization(state),
  loading: loadingIssues(state),
  consultants: selectConsultants(state),
  consultantId: selectAuthorizationId(state),
  issuesByCatAndId: selectIssuesByCategoryAndId(state, props.inventory.id, props.category.id),
})

export default connect(mapStateToProps, {
  getConsultants,
  getIssues,
  updateKit,
  updateHardware,
  addIssue,
  changeIssueStatus,
})(InventoryIssues)
