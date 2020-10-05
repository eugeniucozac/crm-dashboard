import React from "react"
import moment from "moment"
import PropTypes from "prop-types"

export const IssuesList = ({ filteredIssues, openIssue }) => {
  return (
    <ul className="ms-scrollable ps ps--active-y mb-0">
      {filteredIssues.length
        ? filteredIssues.map((issue, item) => {
            const {
              id,
              title,
              createdAt,
              message,
              consultant: { firstName, lastName },
            } = issue
            return (
              <li key={item} className="media ms-email clearfix" onClick={() => openIssue(id)}>
                <div className="ms-email-img mr-3 ">
                  <div className="ms-img-round">
                    {firstName.charAt(0)} {lastName.charAt(0)}
                  </div>
                </div>
                <div className="media-body ms-email-details">
                  <span className="ms-email-sender">
                    {firstName} {lastName}
                  </span>
                  <h6 className="ms-email-subject bold">{title}</h6>
                  <span className="ms-email-time">{moment(createdAt).format("LLL")}</span>
                  <p className="ms-email-msg">{message.slice(0, 190)} ...</p>
                </div>
              </li>
            )
          })
        : null}
    </ul>
  )
}

IssuesList.propTypes = {
  filteredIssues: PropTypes.arrayOf(PropTypes.object),
  openIssue: PropTypes.func.isRequired,
}
