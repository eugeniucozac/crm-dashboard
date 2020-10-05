import React, { Component } from "react"
import { IssuesList } from "@components/Dashboard/Inventory/Issues/IssuesList"
import Pagination from "@components/shared/Pagination"
import PropTypes from "prop-types"

class FilteredIssues extends Component {
  state = {
    issueId: null,
    status: this.props.status,
    limit: 5,
    currentPage: 1,
  }

  showMessages = issueId => {
    this.setState({ issueId })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.status !== nextProps.status) {
      return {
        issueId: null,
      }
    }
  }

  goNext = currentPage => {
    this.setState({ currentPage: currentPage + 1 })
  }

  goPrev = currentPage => {
    this.setState({ currentPage: currentPage - 1 })
  }

  render() {
    const { issues, inventory, roleName, changeIssueStatus } = this.props
    const { currentPage, issueId, limit } = this.state
    return (
      <>
        {issues.length ? (
          <>
            <ul className="ms-scrollable ps ps--active-y">
              {issues.length &&
                issues
                  .slice(currentPage * limit - limit, currentPage * limit)
                  .map(issue => (
                    <IssuesList
                      issue={issue}
                      showMessages={this.showMessages}
                      issueId={issueId}
                      roleName={roleName}
                      changeIssueStatus={changeIssueStatus}
                    />
                  ))}
            </ul>
            <Pagination
              type="issues"
              inventoryId={inventory.id}
              goPrev={this.goPrev}
              goNext={this.goNext}
              onPageChange={this.onPageChange}
              currentPage={currentPage}
              items={issues}
              limit={limit}
            />
          </>
        ) : (
          <div className="media ms-email clearfix">
            <div className="media-body ms-email-details">
              <p className="ms-email-msg">No issues...</p>
            </div>
          </div>
        )}
      </>
    )
  }
}

FilteredIssues.propTypes = {
  issueId: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  roleName: PropTypes.string.isRequired,
  issues: PropTypes.arrayOf(PropTypes.object),
  changeIssueStatus: PropTypes.func.isRequired,
  inventory: PropTypes.object.isRequired,
}

export default FilteredIssues
