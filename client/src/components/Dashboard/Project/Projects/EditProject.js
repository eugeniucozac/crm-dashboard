import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import Sidebar from "@components/Dashboard/Sidebar"
import EditProjectForm from "./EditProjectForm"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { getProjects } from "@actions/project"
import { getConsultants } from "@actions/consultant"
import { selectConsultants } from "@selectors/consultant"
import { selectProject, loadingProject, projectErrors } from "@selectors/project"
import { Loading } from "@components/shared/Loading"

class EditProject extends Component {
  componentDidMount() {
    this.props.getProjects()
    this.props.getConsultants()
  }

  render() {
    const { loading, project, consultants, error } = this.props

    if (loading) return <Loading />
    if (!project) return null
    return (
      <section className="main">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg="11" className="container-left">
            <div className="ms-panel">
              <div className="ms-panel-body">
                <EditProjectForm project={project} consultants={consultants} error={error} />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(state, ownProps.match.params.id),
  consultants: selectConsultants(state),
  loading: loadingProject(state),
  error: projectErrors(state),
})

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getProjects,
    getConsultants,
  })
)(EditProject)
