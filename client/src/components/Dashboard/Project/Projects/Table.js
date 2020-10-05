import React, { Component } from "react"
import { connect } from "react-redux"
import { Table as BootstrapTable } from "react-bootstrap"
import { Link } from "react-router-dom"
import moment from "moment"
import { Loading } from "@components/shared/Loading"
import { getProjects } from "@actions/project"
import { loadingProjects, selectProjectsSearch } from "@selectors/project"
import PropTypes from "prop-types"

class Table extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const { projects, loading } = this.props
    if (loading) return <Loading />
    return (
      <BootstrapTable striped bordered hover>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Job Name</th>
            <th>Created</th>
            <th>Job Status</th>
            <th>Consultant</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {projects.length
            ? projects.map(
                ({
                  id,
                  createdAt,
                  history,
                  consultant: { firstName, lastName },
                  site: { addressName, postCode, city, country },
                }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <Link to={`/dashboard/project/${id}`}> {id}</Link>
                      </td>
                      <td>
                        {addressName},&nbsp;{postCode},&nbsp;
                        {city},&nbsp;{country}
                      </td>
                      <td>{moment(createdAt).format("DD-MM-YYYY")}</td>
                      <td>{history && history[history.length - 1].status.name}</td>
                      <td>
                        {firstName.charAt(0)} {lastName.charAt(0)}
                      </td>
                      <td>
                        <Link className="btn btn-primary mt-0" to={`/dashboard/project/${id}/edit`}>
                          Edit Item
                        </Link>
                      </td>
                    </tr>
                  )
                }
              )
            : null}
        </tbody>
      </BootstrapTable>
    )
  }
}

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = (state, ownProps) => ({
  projects: selectProjectsSearch(state, ownProps.query),
  loading: loadingProjects(state),
})

export default connect(mapStateToProps, {
  getProjects,
})(Table)
