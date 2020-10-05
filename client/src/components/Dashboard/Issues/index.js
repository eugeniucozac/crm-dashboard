import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import { connect } from "react-redux"
import { FaEnvelope, FaFolder, FaEnvelopeOpen } from "react-icons/fa"
import Sidebar from "@components/Dashboard/Sidebar"
import { Loading } from "@components/shared/Loading"
import IssueBlock from "@components/Dashboard/Issues/IssueBlock"
import { getKits, getHardwares } from "@actions/inventory"
import { selectKits, selectHardwares } from "@selectors/inventory"
import { getConsultants } from "@actions/consultant"
import { selectConsultants } from "@selectors/consultant"
import { getIssues, getIssueMessages } from "@actions/issue"
import {
  loadingIssues,
  issueErrors,
  selectIssues,
  selectSidebarCategories,
  selectIssuesByStatus,
} from "selectors/issue"
import PropTypes from "prop-types"

class Issues extends Component {
  state = {
    statusId: false,
    categoryName: null,
    hardwareId: null,
    activeCategoryAndId: null,
    activeStatus: 0,
    issueNumber: null,
  }

  componentDidMount() {
    this.props.getIssues()
    this.props.getKits()
    this.props.getConsultants()
    this.props.getHardwares()
  }

  openIssue = issueNumber => {
    this.setState({ issueNumber })
  }

  byStatus = statusId => {
    this.setState({
      statusId,
      categoryName: null,
      hardwareId: null,
      activeStatus: statusId,
      activeCategoryAndId: null,
      issueNumber: null,
    })
  }

  byCategoryAndId = (categoryName, hardwareId) => {
    this.setState({ categoryName, hardwareId, activeCategoryAndId: hardwareId, activeStatus: null, issueNumber: null })
  }

  render() {
    const {
      issues,
      loading,
      selectSidebarCategories,
      openIssues,
      closedIssues,
      consultants,
      countIssues,
    } = this.props
    const { statusId, categoryName, hardwareId, activeCategoryAndId, activeStatus, issueNumber } = this.state
    if (loading) return <Loading />
    if (!issues.length) return null
    const hardwareSidebar = () => {
      let hardwaresAndKits = []
      for (let [key, value] of Object.entries(selectSidebarCategories)) {
        hardwaresAndKits.push(
          <ul className="ms-list ms-email-list">
            <li className="ms-list-item ms-email-label">{key}</li>
            {value.map(({ id, name }) => {
              return (
                <li className="ms-list-item">
                  <a
                    className={`${activeCategoryAndId == id ? "active" : null}`}
                    onClick={() => this.byCategoryAndId(key, id)}
                  >
                    <FaFolder />
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>
        )
      }
      return hardwaresAndKits
    }

    const main = [
      {
        icon: <FaEnvelope />,
        length: issues.length,
        title: "All",
      },
      {
        icon: <FaEnvelopeOpen />,
        length: openIssues.length,
        title: "Open",
      },
      {
        icon: <FaEnvelope />,
        length: closedIssues.length,
        title: "Closed",
      },
    ]

    return (
      <section className="main">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg="11" className="container-left issues-dashboard">
            <div className="ms-panel ms-email-panel">
              <Row>
                <Col lg="3" className="pr-0">
                  <div className="ms-email-aside">
                    <ul className="ms-list ms-email-list">
                      <li className="ms-list-item ms-email-label"> Main </li>
                      {main.map((menu, i) => {
                        return (
                          <li className="ms-list-item">
                            <a onClick={() => this.byStatus(i)} className={`${activeStatus == i ? "active" : null}`}>
                              {menu.icon}
                              {menu.title} Issues <span>{menu.length}</span>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                    {hardwareSidebar()}
                  </div>
                </Col>
                <Col lg="9" className="pl-0 issue-block">
                  <IssueBlock
                    countIssues={issues.length}
                    consultants={consultants}
                    countIssues={countIssues}
                    status={statusId}
                    openIssue={this.openIssue}
                    issueNumber={issueNumber}
                    categoryName={categoryName}
                    hardwareId={hardwareId}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>
    )
  }
}

Issues.propTypes = {
  statusId: PropTypes.bool.isRequired,
  categoryName: PropTypes.number.isRequired,
  hardwareId: PropTypes.number.isRequired,
  activeCategoryAndId: PropTypes.number.isRequired,
  activeStatus: PropTypes.number.isRequired,
  issueNumber: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  issues: PropTypes.array.isRequired,
  openIssues: PropTypes.array.isRequired,
  closedIssues: PropTypes.array.isRequired,
  consultants: PropTypes.arrayOf(PropTypes.object),
  countIssues: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  loading: loadingIssues(state),
  error: issueErrors(state),
  issues: selectIssues(state),
  kits: selectKits(state),
  hardwares: selectHardwares(state),
  consultants: selectConsultants(state),
  selectSidebarCategories: selectSidebarCategories(state),
  openIssues: selectIssuesByStatus(state, 1),
  closedIssues: selectIssuesByStatus(state, 2),
})

export default connect(mapStateToProps, { getConsultants, getIssues, getKits, getHardwares, getIssueMessages })(Issues)
