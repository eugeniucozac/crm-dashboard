import React from "react"
import moment from "moment"
import { Dropdown, DropdownItem } from "react-bootstrap"
import { FaEllipsisV } from "react-icons/fa"
import { issueStatus } from "@data"
import Messages from "@components/Dashboard/Inventory/Issues/Messages"
import PropTypes from "prop-types"

export const IssuesList = ({
  changeIssueStatus,
  issue: {
    consultant: { firstName, lastName },
  },
  issue,
  roleName,
  showMessages,
  issueId,
}) => {
  const statusIssue = issue.status.id === 1 ? issueStatus[1] : issueStatus[0]
  return (
    <li className="one-issue">
      <div className="media ms-email clearfix" onClick={() => showMessages(issue.id)}>
        <div className="ms-email-img mr-3 ">
          <div className="ms-img-round">
            {firstName.charAt(0)} {lastName.charAt(0)}
          </div>
        </div>
        <div className="media-body ms-email-details">
          <h6 className="ms-email-sender">
            {issue.title} &nbsp;
            <i>
              {firstName} {lastName}
            </i>
            <span className="ms-email-time">{moment(issue.createdAt).format("LLL")}</span>
          </h6>
          <p className="ms-email-msg">{issue.message}</p>
        </div>
      </div>
      {(roleName === "admin" || roleName === "technical-manager") && (
        <Dropdown className="closeIssue">
          <Dropdown.Toggle>
            <FaEllipsisV />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <DropdownItem onClick={() => changeIssueStatus(issue.id, { statusId: statusIssue.id })}>
              {statusIssue.name}
            </DropdownItem>
          </Dropdown.Menu>
        </Dropdown>
      )}
      {issueId == issue.id && <Messages issueId={issueId} />}
    </li>
  )
}

IssuesList.propTypes = {
  changeIssueStatus: PropTypes.func.isRequired,
  issue: PropTypes.object.isRequired,
  roleName: PropTypes.string.isRequired,
  issueId: PropTypes.number.isRequired,
  roleName: PropTypes.object.isRequired,
  showMessages: PropTypes.func.isRequired,
  issue: PropTypes.object.isRequired,
}
