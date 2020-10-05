import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "react-bootstrap"
import { IssuesList } from "@components/Dashboard/Issues/IssuesList"
import IssueMessages from "@components/Dashboard/Issues/IssueMessages"
import { selectIssuesByStatusOrByCategoryAndName } from "@selectors/issue"
import Pagination from "@components/shared/Pagination"
import PropTypes from "prop-types"

class IssueBlock extends Component {
  state = {
    status: 1,
    currentPage: 1,
    limit: 10,
  }

  listIssues = status => {
    this.setState({ status })
  }

  goNext = currentPage => {
    this.setState({ currentPage: currentPage + 1 })
  }

  goPrev = currentPage => {
    this.setState({ currentPage: currentPage - 1 })
  }

  shouldComponentUpdate(nextProps, prevState) {
    if (prevState.filteredIssues !== nextProps.filteredIssues) {
      return true
    }
    return false
  }

  render() {
    const { currentPage, limit } = this.state
    const { filteredIssues, consultants, issueNumber, openIssue, addIssueMessage } = this.props

    return (
      <>
        <div className="ms-panel-header">
          <Row>
            <Col>
              <h6 className="smaller">Issues</h6>
              <p>You have in total {filteredIssues.length} Issues</p>
            </Col>
            <Col>
              {!issueNumber && (
                <Pagination
                  type="issues"
                  goPrev={this.goPrev}
                  goNext={this.goNext}
                  onPageChange={this.onPageChange}
                  currentPage={currentPage}
                  items={filteredIssues}
                  limit={limit}
                />
              )}
            </Col>
          </Row>
        </div>
        <div className="ms-email-content">
          {issueNumber ? (
            <IssueMessages
              issueNumber={issueNumber}
              openIssue={openIssue}
              consultants={consultants}
              addIssueMessage={addIssueMessage}
            />
          ) : (
            filteredIssues && (
              <IssuesList
                filteredIssues={filteredIssues.slice(currentPage * limit - limit, currentPage * limit)}
                consultants={consultants}
                openIssue={openIssue}
              />
            )
          )}
        </div>
      </>
    )
  }
}

IssueBlock.propTypes = {
  status: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  filteredIssues: PropTypes.arrayOf(PropTypes.object),
  consultants: PropTypes.arrayOf(PropTypes.object),
  addIssueMessage: PropTypes.func.isRequired,
  openIssue: PropTypes.number.isRequired,
  issueNumber: PropTypes.number.isRequired,
}

const mapStateToProps = (state, props) => ({
  filteredIssues: selectIssuesByStatusOrByCategoryAndName(state, props.status, props.hardwareId, props.categoryName),
})

export default connect(mapStateToProps, null)(IssueBlock)
